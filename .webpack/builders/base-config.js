/** @type {WebpackExtender} */
const baseConfig = async (webpackConfig = {}, env = {}) => {
  webpackConfig.mode = 'development';
  webpackConfig.devtool = 'source-map';
  webpackConfig.output = {
    filename: '[name].bundle.js',
  };
  webpackConfig.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  };
};

module.exports = { baseConfig };
