var gulp = require('gulp');
var rename = require('gulp-rename');
var beep = require('beepbeep');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglifyjs');
var stylus = require('gulp-stylus');
var tap = require('gulp-tap');
var hjson = require('hjson');
var nib = require('nib');


var config;

gulp.task('opts', optsTask);
gulp.task('replaceOpts', replaceOptsTask);
gulp.task('stylus', ['opts', 'replaceOpts'], stylusTask);
gulp.task('watch', watchTask);
gulp.task('build', ['stylus']);
gulp.task('default', ['build', 'watch']);

function optsTask() {
    return gulp.src('./src/config.hjson')
        .pipe(tap(function(file) {
            config = hjson.parse(String(file.contents));
        }));
}

function replaceOptsTask() {
    return gulp.src('./src/nzAnimate.styl')
        .pipe(tap(function(file) {
            var contents = String(file.contents);
            contents = contents.replace(/\{\{([\d\D\s]+?)\}\}/g, function(match, inner) {
                switch (inner) {
                    case 'vendors':
                        return config.vendors.join(' ');
                    case 'ieSupport':
                        return config.ieSupport;
                    case 'animations':
                        return config.animations.join(' ');
                    case 'defaultSpeed':
                        return config.speed.default;
                    case 'speedStart':
                        return config.speed.start;
                    case 'speedEnd':
                        return Math.floor((config.speed.end - config.speed.start) / config.speed.increment);
                    case 'speedIncrement':
                        return config.speed.increment;
                    case 'staggerStart':
                        return config.stagger.start;
                    case 'staggerEnd':
                        return Math.floor((config.stagger.end - config.stagger.start) / config.stagger.increment);
                    case 'staggerIncrement':
                        return config.stagger.increment;
                    default:
                        return match;
                }
            });
            file.contents = new Buffer(String(contents));
            return file;
        }))
        .pipe(rename(".nzAnimate.styl.temp"))
        .pipe(gulp.dest('./'));
}

function stylusTask() {

    gulp.src('./.nzAnimate.styl.temp')
        .pipe(stylus({
            use: [nib()],
            compress: false,
            "include css": true
        }))
        .pipe(rename("nzAnimate.css"))
        .pipe(gulp.dest('./dist/'));

    return gulp.src('./.nzAnimate.styl.temp')
        .pipe(stylus({
            use: [nib()],
            compress: true,
            "include css": true
        }))
        .pipe(rename("nzAnimate.min.css"))
        .pipe(gulp.dest('./dist/'));
}

function watchTask() {
    gulp.watch('./**.styl', ['build']);
}



function onError(err) {
    beep([0, 0, 0]);
    gutil.log(gutil.colors.green(err));
}
