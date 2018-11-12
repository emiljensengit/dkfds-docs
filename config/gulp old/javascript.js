var gulp        = require('gulp');
var gutil       = require('gulp-util');
var dutil       = require('../gulp/doc-util');
var browserify  = require('browserify');
var buffer      = require('vinyl-buffer');
var source      = require('vinyl-source-stream');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var rename      = require('gulp-rename');
var linter      = require('gulp-eslint');
var task        = 'javascript';

gulp.task('copy-iframe-script', function (done) {
    var stream = gulp.src(['./node_modules/iframe-resizer/js/iframeResizer.contentWindow.min.js', './node_modules/iframe-resizer/js/iframeResizer.contentWindow.map'])
    .pipe(gulp.dest('assets/js/vendor'))
    .pipe(gulp.dest('_site/assets/js/vendor'));

    return stream;
});


gulp.task(task, ['copy-iframe-script'], function (done) {

  var minifiedStream = browserify({
    entries: 'javascript/start.js',
    debug: true,
  });

  return minifiedStream.bundle()
    .pipe(source('start.js'))
    .pipe(buffer())
    .pipe(rename({
      basename: 'styleguide'
    }))
    .pipe(gulp.dest('assets/js'))
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(rename({
      basename: 'styleguide',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js'))
    .pipe(gulp.dest('_site/assets/js'))
});