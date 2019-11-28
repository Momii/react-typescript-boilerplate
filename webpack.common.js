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
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              ['@babel/preset-env',],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel'
            ]
          }
        }
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': resolve(__dirname, 'src/scripts/')
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
