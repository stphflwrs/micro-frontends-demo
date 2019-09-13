const { webpackBuilder } = require('../../.webpack/builder');

const { baseConfig } = require('../../.webpack/builders/base-config');
const { entry } = require('../../.webpack/builders/entry');
const { outputSystem } = require('../../.webpack/builders/output-system');
const { reactRules } = require('../../.webpack/builders/react-rules');


module.exports = async (env = {}) => webpackBuilder(env, baseConfig, entry('random-color'), outputSystem, reactRules);
