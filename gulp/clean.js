/* Clean build directory */
var gulp = require('gulp'),
		config = require('./config'),
		del = require('del');


gulp.task('clean', function () {
	return del(config.pathTo.Build.Clean);
});