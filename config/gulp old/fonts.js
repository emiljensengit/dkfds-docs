var gulp  = require('gulp');
var dutil = require('../gulp/doc-util');
var task  = 'fonts';

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Copying fonts from dkfds');

  var stream = gulp.src('./node_modules/dkfds/src/fonts/**/*')
    .pipe(gulp.dest('assets/fonts'));

  return stream;

});
