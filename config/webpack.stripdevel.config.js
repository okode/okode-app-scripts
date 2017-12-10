const webpackConfig = require('@ionic/app-scripts/config/webpack.config.js');

// Clone prod loaders before to prevent dev loaders were the same object
webpackConfig.prod.module.loaders = Object.assign([], webpackConfig.prod.module.loaders);

// Add webpack-strip-block loader to prod loaders
webpackConfig.prod.module.loaders.unshift({
  test: /\.ts$/,
  loader: 'webpack-strip-block'
});

module.exports = function () { return webpackConfig; }
