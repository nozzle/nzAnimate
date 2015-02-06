var gulp = require('gulp');
var beep = require('beepbeep');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglifyjs');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('stylus', stylusTask);
gulp.task('watch', watchTask);
gulp.task('build', ['stylus']);
gulp.task('default', ['build', 'watch']);

function stylusTask() {

    return gulp.src('./nzAnimate.styl')
        .pipe(stylus({
            use: [nib()],
            compress: true,
            "include css": true
        }))
        .pipe(gulp.dest('./dist/'));
}

function watchTask() {
    gulp.watch('./**.styl', ['build']);
}



function onError(err) {
    beep([0, 0, 0]);
    gutil.log(gutil.colors.green(err));
}
