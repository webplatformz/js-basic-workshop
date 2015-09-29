// Karma configuration
// Generated on Wed Sep 09 2015 13:27:07 GMT+0200 (W. Europe Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-ajax', 'jasmine'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/q/q.js',
      'exercises/*.js',
      'tests/**/*.js'
    ],
    exclude: [
        'exercises/debug.js'
    ],
    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  })
}
