const { join } = require('path');


/**
 * @param {WebpackOptions} config
 * @return {WebpackOptions}
 */
const storybookWebpack = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [{
      loader: 'ts-loader',
      options: { configFile: join(__dirname, 'tsconfig.json') },
    }, {
      loader: 'react-docgen-typescript-loader',
    }],
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};

module.exports = storybookWebpack;
