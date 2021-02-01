const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery', jQuery: 'jquery'
    })
  ],
  entry: {
    ie8: {
      import: './src/ie8.js'
    },
    index: {
      import: './src/index.js'
    }
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      ]
    }, {
      test: /.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true
        }
      }]
    }]
  }
}
