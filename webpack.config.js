const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
  devtool: 'source-map',
  entry: {
    vendors: [
      './node_modules/jquery/dist/jquery.js',
      './node_modules/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
      './node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
      './node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js'
    ],
    app: './themes/new_theme/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'themes/new_theme/source/js/'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      // test: /\.scss$/,
      // loader: ExtractTextPlugin.extract({
      //   fallbackLoader: "style-loader",
      //   loader: "css-loader!sass-loader",
      // }),
    }]
  },
  plugins: [
    // new ExtractTextPlugin("app.css"),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
}

module.exports = config;
