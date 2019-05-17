const gulp = require('gulp');
const autoprefix = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// copy files task
gulp.task('copy', () => {
  return gulp.src('./public/**/*')
             .pipe(gulp.dest('./dist'));
});

// styles task
gulp.task('styles', () => {
  return gulp.src('./public/**/*.css')
    .pipe(autoprefix())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

