const { promises: { readdir } } = require('fs');
const { join } = require('path');
const { devServerCors } = require('../builders/dev-server-cors');
const { webpackBuilder } = require('../builder');
const { baseConfig } = require('../builders/base-config');
const { entry } = require('../builders/entry');
const { outputSystem } = require('../builders/output-system');
const { reactRules } = require('../builders/react-rules');

module.exports = async (env = {}) => {
  const entries = (await readdir(join(__dirname, '../../components'), { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .filter((dirent) => !/^_/.test(dirent.name))
    .map((dirent) => entry(dirent.name, join(__dirname, '../../components', dirent.name, 'src')));

  return webpackBuilder(env, baseConfig, ...entries, outputSystem, reactRules, devServerCors);
};
