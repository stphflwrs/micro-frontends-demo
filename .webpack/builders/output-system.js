/** @type {WebpackExtender} */
const outputSystem = async (webpackConfig, env = {}) => {
  webpackConfig.output = webpackConfig.output !== undefined ? webpackConfig.output : {};
  webpackConfig.output.libraryTarget = 'system';
};

module.exports = { outputSystem };
