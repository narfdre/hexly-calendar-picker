const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'example/index.js'),
  output: {
    path: path.resolve(__dirname, 'example/build'),
    filename: 'index.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src/'), 'node_modules'],
    extensions: ['.js'],
  },
  eslint: {
    configFile: path.resolve(__dirname, '.eslintrc'),
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
      },
      {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss$/,
      },
      {
        loader: 'transform/cacheable?brfs', test: /(example)(.*)\.jsx?$/ 
      }
    ]
  },
  plugins: [],
};
