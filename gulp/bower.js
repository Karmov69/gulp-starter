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

gulp.task('bower-other', function () {
		del('src/js/vendor');

		var jsFilter = gulpFilter(['bower_components/**/*.js','!bower_components/**/jquery.js'], {restore: true}),
				jsFilterJQ = gulpFilter(['bower_components/**/jquery.js'], {restore: true}),
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
				// .pipe(gulp.dest(config.pathTo.Src.BowerJSVendor))
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

gulp.task('bower-bootstrap', function(){
	// var jsFilterBS = gulpFilter(["bower_components/bootstrap/**/modal.js"], {restore: true});

	// return gulp.src('bower_components/**/*.js')
	// 	// Bootstrap JS
	// 	.pipe(jsFilterBS)
	// 	.pipe(gulp.dest(config.pathTo.Src.BowerJSCustom))
	// 	.pipe(jsFilterBS.restore)
});

gulp.task('bower',['bower-other','bower-bootstrap'])