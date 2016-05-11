/* Get Bower files */
var gulp = require('gulp'),
		config = require('./config'),
		uglify = require('gulp-uglify'),
		sourcemaps = require('gulp-sourcemaps'),
		gulpFilter = require('gulp-filter'),
		concat = require('gulp-concat'),
		gutil = require('gulp-util'),
		mainBowerFiles = require('main-bower-files'),
		rename = require('gulp-rename'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload,
		del = require('del'),
		plumber = require('gulp-plumber');

gulp.task('bower', function () {
		del('src/js/vendor/**/*.*');

		var jsFilter = gulpFilter(['**/*.js','!jquery.js'], {restore: true}),
				jsFilterJQ = gulpFilter(['jquery.js'], {restore: true}),
				cssFilter = gulpFilter(['**/*.{css,less}'], {restore: true});

		return gulp.src(mainBowerFiles({
				includeDev: true
		}))
				.pipe(plumber(function(error) {
						gutil.log(gutil.colors.red(error.message));
						this.emit('end');
				}))
				// Get vendor JavaScript
				.pipe(jsFilter)
				// .pipe(sourcemaps.init())
				.pipe(concat('vendor-bundle.js'))
				.pipe(gulp.dest(config.pathTo.Src.BowerJSVendor))
				.pipe(rename({ suffix: '.min' }))
				.pipe(uglify())
				// .pipe(sourcemaps.write('./'))
				.pipe(gulp.dest(config.pathTo.Src.BowerJSVendor))
				.pipe(jsFilter.restore)
				// jQuery
				.pipe(jsFilterJQ)
				.pipe(uglify())
				.pipe(gulp.dest(config.pathTo.Src.BowerJSVendor))
				.pipe(jsFilterJQ.restore)
				// Get vendor CSS
				.pipe(cssFilter)
				.pipe(gulp.dest(config.pathTo.Src.CSSVendor))
				.pipe(cssFilter.restore)
				.pipe(reload({stream: true}));
});
