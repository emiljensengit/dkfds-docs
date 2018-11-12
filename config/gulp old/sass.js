var gulp      = require('gulp');
var dutil     = require('../gulp/doc-util');
var replace = require('gulp-replace');
var runSequence   = require('run-sequence');
var pkg = require('../../package.json');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var linter = require('@18f/stylelint-rules');

gulp.task('compile-docs-styles', function () {

  dutil.logMessage('sass', 'Compiling Sass for Documentation site');

  var stream = gulp.src(['scss/styleguide.scss','scss/styleguide-virkdk.scss','scss/styleguide-borgerdk.scss'])
    // 1. do the version replacement
    .pipe(replace(
      /\bdkfds docs site @version\b/g,
      'dkfds docs site v' + pkg.version
    ))
    // 2. convert SCSS to CSS
    .pipe(
      sass({ 
        outputStyle: 'expanded'
      })
      .on('error', sass.logError)
    )
    // 3. run it through autoprefixer
    .pipe(
      autoprefixer({
        browsers: require('../gulp/browsers'),
        cascade: false,
      })
    )
    // 4. write dist/css/dkfds.css
    .pipe(gulp.dest('./assets/css')) //The assets files are later copied by Jekyll into /_site (127.0.0.1 site) and /docs (github pages)
    .pipe(gulp.dest('./_site/assets/css')) //copy into /_site for quick development cycle (so we dont have to wait for Jekyll). 

  // we can reuse this stream for minificatio n!
  stream
    // 1. initialize sourcemaps
    .pipe(sourcemaps.init({ loadMaps: true }))
    // 2. minify with cssnano
    .pipe(cssnano({
      safe: true,
      // XXX see https://github.com/ben-eb/cssnano/issues/340
      mergeRules: false,
    }))
    // 3. rename to dkfds.min.css
    .pipe(rename({
      suffix: '.min',
    }))
    // 4. write dist/css/dkfds.min.css.map
    .pipe(sourcemaps.write('.'))
    // 5. write dist/css/dkfds.min.css
    .pipe(gulp.dest('./assets/css')) //The assets files are later copied by Jekyll into /_site (127.0.0.1 site) and /docs (github pages)
    .pipe(gulp.dest('./_site/assets/css')) //copy into /_site for quick development cycle (so we dont have to wait for Jekyll). 
  return stream;
});


//gulp.task('sass', ['copy-doc-styles', 'copy-dkfds-styles']);
gulp.task('sass', ['compile-docs-styles']);
