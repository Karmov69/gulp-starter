module.exports = {
	projecctName: 'Project',

	// Path settings
	pathTo: {
		Src: {
			Styles: 'src/less/**/*.less',
			MainStyleFile: 'src/less/style.less',
			Jade: 'src/jade/**/[^_]*.jade',
			Images: ['src/img/**/*.*', '!src/img/sprite/*.*', '!src/img/favicon/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			GHPages: 'dist/**/*',
			JS: 'src/js/**/*.*',
			JSVendor: 'vendor/**/*.*',
			BowerJSVendor: 'src/js/vendor/',
			JSCustom: ['custom/**/*.js', 'main.js', '!custom/toHead/**/*.js'],
			CSSVendor: 'src/less/vendor/',
			Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess'],
			Fonts: 'src/fonts/**/*',
			Svg: ['src/svg/**/*.*', '!src/svg/sprite/*.*'],
			SvgSprite: 'src/svg/sprite/**/*.svg',
			Favicon: 'src/img/favicon/favicon.png'
		},
		Build: {
			Styles: 'dist/css',
			Html: 'dist/',
			Jade: 'dist/*.html',
			Images: 'dist/img',
			PngSprite: 'dist/img',
			PngSpriteCSS: 'src/less/blocks',
			JSVendor: 'dist/js',
			JSCustom: 'dist/js/custom',
			Txt: 'dist/',
			Clean: ['dist/**/*', '!dist/.gitignore'],
			Fonts: 'dist/fonts',
			Svg: 'dist/svg',
			SvgSprite: 'dist/img',
			SvgSpriteNoSvg: 'dist/svg/sprite/svg-sprite.png',
			Favicon: 'dist/img/favicons/',
			FaviconInject: 'dist/*.html'
		},
		Watch: {
			Styles: 'src/less/**/*.less',
			Jade: 'src/jade/**/*.jade',
			Images: ['src/img/**/*.*', '!src/img/sprite/*.*', '!src/img/favicon/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			SvgSprite: 'src/svg/sprite/**/*.svg',
			Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess'],
			JS: 'src/js/**/*.*',
			Fonts: 'src/fonts/**/*',
			Favicon: 'src/img/favicon/favicon.png'
		}
	},

	// GitHub Pages options ex. git@github.com:vUdav/gulp-starter.git
	ghpOptions: {
		remoteUrl: ''
	},

	// Browser versions for automatically prefix
	autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR'],

	// BrowserSync local web server settings
	browserSync: {
		server: './dist',
		baseDir: './dist',
		tunnel: false,
		host: 'localhost',
		port: 9000,
		injectChanges: true,
		delay: 100,
		logPrefix: "Project"
	},

	// ftp config
	ftp: {
		host: '',
		user: '',
		pass: '',
		remotePath: ''
	}

};