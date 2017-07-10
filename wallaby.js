var wallabyWebpack = require('wallaby-webpack');

var wallabyPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.js', load: false }
    ],

    tests: [
      { pattern: 'test/**/*.js', load: false }
    ],

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};
