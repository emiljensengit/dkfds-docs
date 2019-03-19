var gulp = require('gulp');


var config = {
    baseNodemodulesPath: "./node_modules/dkfds/src",
    componentsHtml: "./node_modules/dkfds/src/components/**/*.*",
    docStyles: "./scss/**/*",
    componentStyles: ["./node_modules/dkfds/src/stylesheets/**/*.scss"],
    componentJavascript: "./node_modules/dkfds/dist/js/**/*"
}

// Watching for changes
gulp.task('watch', function () {
    gulp.watch(config.componentsHtml,['html']);
    gulp.watch(config.docStyles,['sass']);
    gulp.watch(config.componentStyles,['sass']);
    gulp.watch(config.componentJavascript,['javascript']);
    //maybe add more watchs (images, fonts etc)
});