const webpackConfig = require('@ionic/app-scripts/config/webpack.config.js');

// webpackConfig.[dev | prod].module.loaders are the same object, we can use any of them
webpackConfig.dev.module.loaders.unshift({
  loader: 'ifdef-loader',
  options: {
    PROD: process.env.IONIC_ENV === 'prod',
    DEV: process.env.IONIC_ENV === 'dev'
  }
});

module.exports = function () { return webpackConfig; }
