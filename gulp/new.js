/* New page */
/*
write on console: gulp new-page --page your-some-page --title your-some-title
*/
var gulp = require('gulp'),
		config = require('./config'),
		gutil = require('gulp-util'),
		template = require('gulp-template'),
		rename = require('gulp-rename')
		insert = require('gulp-inject-string');

gulp.task('new-page', function () {

	gulp.src('src/templates/page.jade')
		.pipe(template({page: (gutil.env.page ? gutil.env.page : 'new-page'), title: (gutil.env.title ? gutil.env.title : 'Новая страница')}))
		.pipe(rename({ basename: (gutil.env.page ? gutil.env.page : 'new-page') }))
		.pipe(gulp.dest('src/jade'));

	gulp.src('src/templates/page.less')
		.pipe(rename({ basename: (gutil.env.page ? gutil.env.page : 'new-page')+'-style' }))
		.pipe(gulp.dest('src/less'));

	gulp.src('src/templates/page.js')
		.pipe(rename({ basename: (gutil.env.page ? gutil.env.page : 'new-page')+'-script' }))
		.pipe(gulp.dest('src/js/custom/'));

	gulp.src('src/jade/pages.jade')
		.pipe(insert.append('\n\t\tli: a(href="'+(gutil.env.page ? gutil.env.page : 'new-page')+'.html" target="_blank") '+(gutil.env.title ? gutil.env.title : 'Новая страница') ))
		.pipe(gulp.dest('src/jade'));
});