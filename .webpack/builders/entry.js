/** @extends {WebpackExtenderFactory} */
const entry = (name, entrypoint = './src/index') => {
  return async (webpackConfig = {}, env = {}) => {
    webpackConfig.entry = webpackConfig.entry !== undefined ? webpackConfig.entry : {};
    webpackConfig.entry[name] = entrypoint;
  };
};

module.exports = { entry };
