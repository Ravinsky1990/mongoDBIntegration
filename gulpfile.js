const gulp = require('gulp');
const sass = require('gulp-sass');

const compileScss = () => {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
};


exports.build = compileScss;
