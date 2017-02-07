/* Build */
var gulp = require('gulp'),
		runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
	runSequence(
		'clean',
		'svg-sprite',
		['js',
		'png-sprite',
		'img',
		'svg',
		'fonts',
		'less',
		'jade'],
		'favicon',
		callback)
});