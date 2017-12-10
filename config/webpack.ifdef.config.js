const webpackConfig = require('@ionic/app-scripts/config/webpack.config.js');

webpackConfig.dev.module.loaders.unshift({
  loader: 'ifdef-loader',
  options: {
    PROD: process.env.IONIC_ENV === 'prod',
    DEV: process.env.IONIC_ENV === 'dev',
    "ifdef-verbose": true
  }
});

webpackConfig.prod.module.loaders.unshift({
  loader: 'ifdef-loader',
  options: {
    PROD: process.env.IONIC_ENV === 'prod',
    DEV: process.env.IONIC_ENV === 'dev',
    "ifdef-verbose": true
  }
});

console.log('DEBUG WEBPACK: Current loaders: ' + JSON.stringify(webpackConfig.dev.module.loaders));

module.exports = function () { return webpackConfig; }
