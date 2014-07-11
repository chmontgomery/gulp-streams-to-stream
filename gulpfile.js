var gulp = require('gulp'),
  bundle = require('./lib/bundle');

gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('./public'));
});