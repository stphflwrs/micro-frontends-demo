const { webpackBuilder } = require('./builder');

const { baseConfig } = require('./builders/base-config');
const { devServerCors } = require('./builders/dev-server-cors');
const { entry } = require('./builders/entry');
const { outputSystem } = require('./builders/output-system');
const { reactRules } = require('./builders/react-rules');

module.exports = {
  webpackBuilder,
  baseConfig,
  devServerCors,
  entry,
  outputSystem,
  reactRules,
};
