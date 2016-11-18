/* SVG */
var gulp = require('gulp'),
    config = require('./config'),
    imagemin = require('gulp-imagemin'),
    cached = require('gulp-cached'),
    gutil = require('gulp-util'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');

gulp.task('svg', function () {
    return gulp.src(config.pathTo.Src.Svg)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(imagemin({
            multipass: true,
            optimizationLevel: 7
        }))
				.pipe(cached('svg'))
        .pipe(gulp.dest(config.pathTo.Build.Svg))
        .pipe(reload({stream: true}));
});