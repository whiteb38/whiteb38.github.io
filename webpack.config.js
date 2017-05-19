const path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
          test: /.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot-loader','babel-loader']
        },
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.(woff|woff2|eot|ttf|dtd|svg)$/, loader: 'url-loader' }
      ],
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: [
    //       'babel-loader',
    //     ],
    //   },
    //],
  },
  // resolve: {
  //   modules: [
  //     path.join(__dirname, 'node_modules'),
  //   ],
  // },
};
