module.exports = {
	// Path settings
	pathTo: {
		Src: {
			Styles: 'src/less/**/[^_]*.less',
			Jade: 'src/jade/**/[^_]*.jade',
			Images: ['src/img/**/*.{jpg,jpeg,png,gif}', '!src/img/sprite/*.*', '!src/img/favicon/*.*', '!src/img/svg-sprite/*.*', '!src/img/svg/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			GHPages: 'dist/**/*',
			JS: 'src/js/**/*.*',
			Fonts: 'src/fonts/**/*',
			Svg: 'src/img/svg/**/*.svg',
			SvgSprite: 'src/img/svg-sprite/**/*.svg',
			Favicon: 'src/img/favicon/favicon.png',
			PagesList: 'src/jade/pages.jade'
		},
		Build: {
			Styles: 'dist/css',
			Html: 'dist/',
			Jade: 'dist/*.html',
			Images: 'dist/img',
			PngSprite: 'dist/img',
			PngSpriteCSS: 'src/less/components',
			JS: 'dist/js',
			Clean: 'dist/**/*',
			Fonts: 'dist/fonts',
			Svg: 'dist/img/svg',
			SvgSprite: 'dist/img/svg',
			Favicon: 'dist/img/favicons/',
			FaviconInject: 'dist/*.html'
		},
		Watch: {
			Styles: 'src/less/**/*.less',
			Jade: 'src/jade/**/*.jade',
			Images: ['src/img/**/*.{jpg,jpeg,png,gif}', '!src/img/sprite/*.*', '!src/img/favicon/*.*', '!src/img/svg-sprite/*.*', '!src/img/svg/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			Svg: 'src/img/svg/**/*.svg',
			SvgSprite: 'src/img/svg-sprite/**/*.svg',
			JS: 'src/js/**/*.*',
			Fonts: 'src/fonts/**/*',
			Favicon: 'src/img/favicon/favicon.png'
		},
		Templates: {
			Page: {
				Jade: 'src/templates/page/template.jade',
				Less: 'src/templates/page/template.less',
				Js: 'src/templates/page/template.js'
			},
			Component: {
				Jade: 'src/templates/component/template.jade',
				Less: 'src/templates/component/template.less'
			},
			Dest: {
				Page: {
					Jade: 'src/jade',
					Less: 'src/less',
					Js: 'src/js'
				},
				Component: {
					Jade: 'src/jade/components',
					Less: 'src/less/components'
				}
			}
		}
	},

	// Favicon settings
	faviconSettings: {
		appName: 'project',
		iconColor: '#000000',
		bgColor: '#ffffff'
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
		logPrefix: 'project'
	},

	// ftp config
	ftp: {
		host: '',
		user: '',
		pass: '',
		remotePath: ''
	}

};