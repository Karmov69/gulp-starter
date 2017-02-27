module.exports = {
	// Path settings
	pathTo: {
		Src: {
			Styles: 'src/less/**/[^_]*.less',
			Pug: 'src/pug/**/[^_]*.pug',
			Images: ['src/img/**/*.{jpg,jpeg,png,gif}', '!src/img/sprite/*.*', '!src/img/favicon/*.*', '!src/img/svg-sprite/*.*', '!src/img/svg/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			GHPages: 'dist/**/*',
			JS: 'src/js/**/*.*',
			Fonts: 'src/fonts/**/*',
			Svg: 'src/img/svg/**/*.svg',
			SvgSprite: 'src/img/svg-sprite/**/*.svg',
			Favicon: 'src/img/favicon/favicon.png',
			PagesList: 'src/pug/pages.pug'
		},
		Build: {
			Styles: 'dist/css',
			Html: 'dist/',
			Pug: 'dist/*.html',
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
			Pug: 'src/pug/**/*.pug',
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
				Pug: 'src/templates/page/template.pug',
				Less: 'src/templates/page/template.less',
				Js: 'src/templates/page/template.js'
			},
			Component: {
				Pug: 'src/templates/component/template.pug',
				Less: 'src/templates/component/template.less'
			},
			Dest: {
				Page: {
					Pug: 'src/pug',
					Less: 'src/less',
					Js: 'src/js'
				},
				Component: {
					Pug: 'src/pug/components',
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