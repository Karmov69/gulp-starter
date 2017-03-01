// add this some vendor js scripts for this page (use gulp-rigger syntax)

document.addEventListener('DOMContentLoaded', function(){

	"use strict";

	var app = {};
	window.app = app;

	app.mainInit = function(){
		// Window size
		app.widowWidth = window.innerWidth;
		app.mobileWidth = 320;
		app.tabletWidth = 750;
		app.desktopWidth = 1200;
	};

	app.mainInit();

});