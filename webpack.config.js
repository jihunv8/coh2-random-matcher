const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },

  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
