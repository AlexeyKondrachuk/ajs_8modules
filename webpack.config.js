const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin ({filename: './src/css/style.css'}),
    new HtmlWebpackPlugin({ template: './src/index.html', filename: './index.html' }),
  ],
};