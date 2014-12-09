var exec = require('child_process').exec;
var debug = require('debug')('chartlingjs');

module.exports = function(expected, actual, options, cb) {
  options = options || {};

  if (typeof options == 'function') {
    cb = options;
    options = {};
  }

  options.metric = options.metric || 'mse';

  var execCmd = 'compare ' + buildArgs(options) + ' ' + expected + ' ' + actual + ' null:';
  debug('Executing imagemagick: %s', execCmd);

  exec(execCmd, function(err, stdout, stderr) {
    if (err && err.code === 1) {
      err = null;
    }

    if (err) {
      debug('Comparison failed with error %s', err);
      return cb(err);
    }

    // Imagemagick decides to print comparison values to stderr for what reason ever...
    stdout = stderr;

    debug('Comparison succeeded with result %s', stdout);

    var regex = /(.*)\((.*)\)/;
    var match = regex.exec(stdout);

    if (!match) {
      err = new Error('Unable to parse output.\nGot ' + stdout);
      return cb(err);
    }

    var equality = parseFloat(match[1]);
    cb(null, equality, stdout);
  });
};

function buildArgs(options) {
  var args = '';

  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      args += ' -' + key + ' ' + options[key];
    }
  }

  return args;
}
