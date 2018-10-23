var gulp  = require('gulp');
var dutil = require('./doc-util');
var task  = 'images';

gulp.task('copy-doc-images', function (done) {

  dutil.logMessage(task, 'Copying images from img/');

  var stream = gulp.src('./img/**/*')
    .pipe(gulp.dest('assets/img'));

  return stream;

});

gulp.task('copy-dkfds-images', function (done) {

  dutil.logMessage(task, 'Copying images from dkfds');

  var stream = gulp.src('./node_modules/dkfds/src/img/**/*')
    .pipe(gulp.dest('assets/img'));

  return stream;

});

gulp.task(task, [ 'copy-doc-images', 'copy-dkfds-images' ], function (done) {

  dutil.logMessage(task, 'Copying images Sass');

});
