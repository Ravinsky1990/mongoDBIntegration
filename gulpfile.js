const gulp = require ('gulp');
const sass = require('gulp-sass');
// sass.compiler = require('node-sass');


//Tasks functions
const compile_scss = ()=>{
  return gulp.src('./src/sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/'))
}


exports.build = compile_scss