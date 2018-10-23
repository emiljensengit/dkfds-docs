var gulp = require('gulp');


var config = {
    baseNodemodulesPath: "./node_modules/dkfds/src",
    componentsHtml: "./node_modules/dkfds/src/components/**/*.*",
    docStyles: "./css/**/*",
    componentStyles: ["./node_modules/dkfds/src/stylesheets/**/*.scss", "!./node_modules/dkfds/src/stylesheets/lib/**/*.scss"],  
    componentJavascript: "./node_modules/dkfds/dist/js/**/*"
}

// Watching for changes
gulp.task('watch', function () {
    gulp.watch(config.componentsHtml,['html']);
    gulp.watch(config.docStyles,['copy-doc-styles']);
    gulp.watch(config.componentStyles,['copy-dkfds-styles']);
    gulp.watch(config.componentJavascript,['javascript']);
    //maybe add more watchs (images, fonts etc)
});