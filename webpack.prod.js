// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// CSS loader plugins
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');

/**
 * @type import('webpack').Configuration
 */
module.exports = {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                postcssFlexbugsFixes,
                postcssPresetEnv({
                  autoprefixer: {
                    grid: 'autoplace',
                    flexbox: 'no-2009',
                  }
                }),
                postcssNormalize(),
              ],
            }
          },
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
};
