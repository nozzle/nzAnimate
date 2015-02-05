var gulp = require('gulp');
var beep = require('beepbeep');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglifyjs');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('js', jsTask);
gulp.task('stylus', stylusTask);
gulp.task('watch', watchTask);
gulp.task('build', ['js', 'stylus']);
gulp.task('default', ['js', 'stylus', 'watch']);

function jsTask() {
    return gulp.src([
            './nzAnimate.js'
        ])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(uglify('dist/nzAnimate.min.js', {
            compress: false
        }))
        .pipe(gulp.dest('./'));
}

function stylusTask() {

    return gulp.src('./nzAnimate.styl')
        .pipe(stylus({
            use: [nib()],
            compress: true,
            "include css": true
        }))
        .pipe(gulp.dest('./dist/'));
}

function buildTask() {
    return gulp.src([
            './nzAnimate.js'
        ])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(uglify('nzAnimate.min.js', {
            compress: true
        }))
        .pipe(gulp.dest('./'));
}

function watchTask() {
    gulp.watch(['./**.styl', './**.js'], ['build']);
}



function onError(err) {
    beep([0, 0, 0]);
    gutil.log(gutil.colors.green(err));
}
