/* JavaScript */
var gulp = require('gulp'),
		config = require('./config'),
		uglify = require('gulp-uglify'),
		cached = require('gulp-cached'),
		gutil = require('gulp-util'),
		rename = require('gulp-rename'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload,
		plumber = require('gulp-plumber'),
		rigger = require('gulp-rigger'),
		flatten = require('gulp-flatten');

gulp.task('js', function () {
	return gulp.src(config.pathTo.Src.JS)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(rigger())
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(flatten())
		.pipe(cached('js'))
		.pipe(gulp.dest(config.pathTo.Build.JS))
		.pipe(reload({stream: true}));
});