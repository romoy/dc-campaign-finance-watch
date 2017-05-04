var webpackCfg = require('./webpack.config');

module.exports = function(config) {
  var configuration = {
    basePath: '',
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: ['test/loadtests.js'],
    port: 9876,
    captureTimeout: 60000,
    frameworks: ['mocha', 'chai'],
    client: {
      mocha: {}
    },
    singleRun: true,
    reporters: ['mocha', 'coverage'],
    preprocessors: {
      'test/loadtests.js': ['webpack', 'sourcemap']
    },
    webpack: webpackCfg,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{ type: 'html' }, { type: 'text' }]
    }
  };
  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }
  config.set(configuration);
};
