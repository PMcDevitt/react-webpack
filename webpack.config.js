var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/build')
var APP_DIR = path.resolve(__dirname + '/app')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },// below is only required for DEV
  devtool: 'source-map',
  devServer:{
    inline: true,
    contentBase: BUILD_DIR,
    port: 3333
  },// above is only needed for DeV
  module: {
    loaders:[
      {
        test: /\.jsx?/,
        inculde: APP_DIR,
        loader: 'babel',
        query: {
          presets:['es2015', 'react']
        }
      }
    ]
  }, plugins:[
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
module.exports = config
