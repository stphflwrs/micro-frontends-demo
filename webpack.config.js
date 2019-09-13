const { join } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { baseConfig, entry, reactRules, webpackBuilder } = require('./.webpack');

module.exports = async (env = {}) => {
  /** @type {WebpackOptions} */
  const webpackConfig = await webpackBuilder(baseConfig, entry('app', './src/main.ts'), reactRules);

  webpackConfig.plugins = webpackConfig.plugins !== undefined ? webpackConfig.plugins : [];
  webpackConfig.plugins.push(new CleanWebpackPlugin());
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    template: join(__dirname, 'src/index.html'),
  }));

  return webpackConfig;
};
