/** @type {WebpackExtender} */
const reactRules = async (webpackConfig, env = {}) => {
  /** @type {RuleSetRule[]} */
  const rules = [{
    parser: { system: false },
  }, {
    test: /\.ts(x?)$/,
    use: 'ts-loader',
    exclude: [/node_modules/],
  }, {
    enforce: 'pre',
    test: /\.js$/,
    use: 'source-map-loader',
  }];

  webpackConfig.module = webpackConfig.module !== undefined ? webpackConfig.module : {};
  webpackConfig.module.rules = webpackConfig.module.rules !== undefined ? webpackConfig.module.rules.push(rules) : rules;
};

module.exports = { reactRules };
