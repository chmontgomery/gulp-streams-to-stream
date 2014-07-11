var gulp = require('gulp'),
  through = require('through2'),
  concat = require('gulp-concat');

module.exports = function () {

  return through.obj(function (file, enc, cb) {
    var config;

    try {
      config = require(file.path);
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

    for (var i = 0; i < streams.length; i++) {
      // This causes an error in `gulp.dest` because we're returning the stream, not the file.
      // How do I resolve each of the individual streams and push the results back to the main stream??
      this.push(streams[i]);
    }

    cb();

  });

};