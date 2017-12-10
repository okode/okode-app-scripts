const webpackConfig = require('@ionic/app-scripts/config/webpack.config.js');

Object.keys(webpackConfig).forEach(function(env) {
  webpackConfig[env].module.loaders.unshift({
    test: /\.ts$/,
    loader: 'ifdef-loader',
    options: {
      PROD: process.env.IONIC_ENV === 'prod',
      DEV:  process.env.IONIC_ENV === 'dev'
    }
  });
});

module.exports = function () { return webpackConfig; }
