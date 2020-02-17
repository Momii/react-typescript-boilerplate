const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  entry: {
    main: './src/index.tsx',
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
          }
        }
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': resolve(__dirname, 'src/scripts/'),
      'react-dom': '@hot-loader/react-dom',
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'hello'
    }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};
