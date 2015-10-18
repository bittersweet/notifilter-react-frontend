var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'static/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'rules.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [node_modules_dir],
      loader: 'babel'
    }]
  }
};

module.exports = config;