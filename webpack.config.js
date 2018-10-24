var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'cheap-module.source-map',
    mode:'development',
    entry: 'src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/react']
                }
              }
            }
          ]
    },
    plugins: [new HtmlWebpackPlugin({
      template: './public/index.html'
  })]
}