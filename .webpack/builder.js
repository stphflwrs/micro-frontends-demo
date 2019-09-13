/**
 *
 * @param {Record<string, string>} env
 * @param {WebpackExtender[]} extenders
 * @returns {Promise<WebpackOptions>}
 */
const webpackBuilder = async (env = {}, ...extenders) => {
  const webpackConfig = {};

  for (const extender of extenders) {
    await extender(webpackConfig, env);
  }

  return webpackConfig;
};

module.exports = { webpackBuilder };
