var gulp = require('gulp'),
  concat = require('gulp-concat'),
  duplexer = require('duplexer2'),
  stream = require("readable-stream");

module.exports = function () {

  var writable = new stream.Writable({objectMode: true});
  var readable = new stream.Readable({objectMode: true});

  writable._write = function _write(file, encoding, done) {

    var config;
    try {
      config = require(file.path); // get config file
    } catch (e) {
      this.emit('error', e);
      return cb();
    }
    var streams = [];
    for (var key in config.bundle) {
      var bundle = config.bundle[key];

      streams.push(
        gulp.src(bundle.js, {base: '.'})
          .pipe(concat(key + '.js'))
      );

      streams.push(
        gulp.src(bundle.css, {base: '.'})
          .pipe(concat(key + '.css'))
      );

      streams.push(
        gulp.src(bundle.resources, {base: '.'})
        //.pipe(something())
      );
    }
    streams.forEach(function(stream){ stream.pipe(readable) });
    return done();
  };

  readable._read = function _read(n) {
    // no-op
  };

  return duplexer(writable, readable);
};