var path = require('path');

var childProcess = require('child_process');
var phantomjs = require('phantomjs');

var expect = require('chai').expect;

var compare = require('./compare');

module.exports = function(chartFile, expectedImageFile, done) {
  var renderedFile = path.join(__dirname, '../../_tmp', expectedImageFile);
  var expectedPath = path.join(__dirname, '../fixtures', expectedImageFile);

  var args = [
    path.join(__dirname, '../phantom/rasterize.js'),
    'test/ui/fixtures/' + chartFile,
    renderedFile
  ];

  childProcess.execFile(phantomjs.path, args, function(err, stdout, stderr) {
    if (err) {
      console.log(stderr);
    }

    expect(err).to.not.exist;

    compare(expectedPath, renderedFile, function(err, equality) {
      expect(err).to.not.exist;
      expect(equality).to.be.lessThan(0.2);

      done();
    });
  });
};