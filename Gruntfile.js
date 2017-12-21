module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
            clean: {
                command: 'hexo clean'
            },
            generate: {
                command: 'hexo generate'
            },
            server: {
                command: 'hexo server --open'
            }
        },

        sass: {
            options: {
                includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/']
             },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'themes/mirumee/source/css/app.css': 'themes/mirumee/scss/app.scss'
                }
            }
        },

        uglify: {
            options: {
                mangle: false,
                sourceMap: true
            },
            dev: {
                files: {
                    "themes/new_theme/source/js/vendors.js": [
                        "node_modules/jquery/dist/jquery.js",
                        "node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js",
                        "node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js",
                        "node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js",
                    ],
                    "themes/new_theme/source/js/app.js": [
                        "themes/new_theme/js/app.js"
                    ]
                }
            }
        },
        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: 'themes/new_theme/scss/**/*.scss',
                tasks: ['sass'],
                options: {
                    atBegin: true
                }
            },

            uglify: {
                files: 'themes/new_theme/js/*.js',
                tasks: ['uglify'],
                options: {
                    atBegin: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('uglifyjs', ['uglify']);
    grunt.registerTask('build', ['sass', 'uglify', 'shell:clean', 'shell:generate']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('server', ['shell:clean', 'shell:server']);
}
