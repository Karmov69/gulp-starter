var gulp = require('gulp'),
		config = require('./config'),
		svgstore = require('gulp-svgstore'),
		svgmin = require('gulp-svgmin'),
		cached = require('gulp-cached'),
		gutil = require('gulp-util'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload,
		path = require('path'),
		cheerio = require('gulp-cheerio'),
		plumber = require('gulp-plumber');

gulp.task('svg-sprite', function () {
	return gulp.src(config.pathTo.Src.SvgSprite)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(svgmin())
		.pipe(svgstore())
		.pipe(cheerio({
			run: function ($, file) {
				$('svg').addClass('hide');
				$('[fill]').removeAttr('fill');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(cached('svg-sprite'))
		.pipe(gulp.dest(config.pathTo.Build.SvgSprite))
		.pipe(reload({stream: true}));
});