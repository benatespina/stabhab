const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins = (config.plugins || []).concat([
    new StyleLintPlugin({
      files: 'src/**/*.css',
    }),
  ]);

  return config;
};
