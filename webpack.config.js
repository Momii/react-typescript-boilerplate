const common = require('./webpack.common');
const development = require('./webpack.dev');
const production = require('./webpack.prod');
const merge = require('webpack-merge');

let envModule;

switch (process.env.NODE_ENV) {
  case 'production':
    envModule = production;
    break;
  case 'development':
    envModule = development;
    break;
  default:
    break;
}

console.log(envModule);

module.exports = merge(common, envModule);
