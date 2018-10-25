var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'cheap-module.source-map',
    mode:'development',
    entry: './src/index.js',
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
            },
            {
              test: /\.css$/,
               use: ['style-loader', 'css-loader']
            },
            {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
          },
 
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
              }
          }]
      },
        {
          "enforce": "pre",
          "test": /\.js$/,
          "loader": "source-map-loader",
          "exclude": [
            // instead of /\/node_modules\//
            path.join(process.cwd(), 'node_modules')
          ]
        },
          ]
    },
    plugins: [
      new HtmlWebpackPlugin({
      template: './public/index.html'
  }),
  new webpack.ProvidePlugin({
    jQuery: 'jquery'
})
]
}