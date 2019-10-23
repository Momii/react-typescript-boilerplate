const path = require('path');
const webpack = require('webpack');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');
const postcssNormalize = require('postcss-normalize');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 9000,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                postcssFlexbugsFixes,
                autoprefixer({ grid: 'autoplace' }),
                postcssNormalize(),
              ],
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StylelintWebpackPlugin()
  ]
};
