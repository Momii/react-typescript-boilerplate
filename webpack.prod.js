const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');
const postcssNormalize = require('postcss-normalize');

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
          'style-loader',
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
                autoprefixer({ grid: 'autoplace' }),
                postcssNormalize(),
              ],
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
  ]
};
