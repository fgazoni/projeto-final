var gulp = require('gulp');
 var sass = require('gulp-sass');
 gulp.task('sass', function() {
     gulp.src('./Style/*.scss')
         .pipe(sass())
         .pipe(gulp.dest(function(f) {
             return (f.base + "\CSSFile");
         }))
 });
 
 gulp.task('default', ['sass'], function() {
     gulp.watch('./Style/*scss', ['sass']);
 })
