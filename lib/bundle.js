var gulp = require('gulp'),
  through = require('through2');

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
        //.pipe(uglify())
        // etc...
      );

      streams.push(
        gulp.src(bundle.css, {base: '.'})
        //.pipe(minifyCss())
        // etc...
      );

      streams.push(
        gulp.src(bundle.resources, {base: '.'})
        //.pipe(something())
        // etc...
      );

    }

    for (var i = 0; i < streams.length; i++) {
      this.push(streams[i]);
    }

    cb();

  });

};