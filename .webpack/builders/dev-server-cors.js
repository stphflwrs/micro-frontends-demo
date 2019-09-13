/** @type {WebpackOptions} */
const devServerCors = async (webpackConfig, env = {}) => {
  webpackConfig.devServer = webpackConfig.devServer !== undefined ? webpackConfig.devServer : {};
  webpackConfig.devServer.headers = webpackConfig.devServer.headers !== undefined ? webpackConfig.devServer.headers : {};
  webpackConfig.devServer.headers['Access-Control-Allow-Origin'] = '*';
};

module.exports = { devServerCors };
