const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
