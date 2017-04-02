var gulp = require('gulp'),
    // browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber');

/* Wait for jekyll-build, then launch the Server */
gulp.task('browser-sync', ['sass'], function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

/* Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds) */
gulp.task('sass', function () {
  return gulp.src([
    'src/scss/main.scss'
  ])
      .pipe(plumber(function(error) {
        gutil.log(gutil.colors.red(error.message));
        this.emit('end');
      }))
      .pipe(sass({
        includePaths: ['scss'],
        outputStyle: 'compressed',
        // onError: browserSync.notify
      }))
      .pipe(prefix(['last 2 versions', '> 1%'], { cascade: true }))
      .pipe(gulp.dest('public'))
      // .pipe(browserSync.reload({stream:true}))
      .pipe(gulp.dest('public'));
});

/* Watch scss files for changes & recompile, watch html/md files, run jekyll & reload BrowserSync */
gulp.task('watch', function () {
  gulp.watch([
    'src/scss/**/*.scss'
  ], ['sass']);
});

/* Default task, running just `gulp` will compile the sass, compile the jekyll site, launch BrowserSync & watch files. */
gulp.task('default', ['sass']);
