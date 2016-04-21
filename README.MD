# vUdav gulp starter pack
## Use technology:
* Jade
* Less
* Bower
* SVG

## Directory system
```
**project**
├─**gulp**
│├─bower.js
│├─build.js
│├─clean.js
│├─config.js
│├─default.js
│├─favicon.js
│├─fonts.js
│├─ftp.js
│├─gh-pages.js
│├─mages.js
│├─jade.js
│├─js.js
│├─less.js
│├─png-sprite.js
│├─svg-sprite.js
│├─svg.js
│├─txt.js
│├─watch.js
│└─webserver.js
├─**dist**
├─**src**
│├─**fonts**
│├─**img**
││├─**favicon**
│││└─favicon.png
││├─**pics**
││└─**sprite**
│├─**jade**
││├─**components**
│││├─_footer.jade
│││├─_head.jade
│││├─_page-footer.jade
│││└─_page-header.jade
││├─**mixins**
│││└─_svg.jade
││├─**templates**
│││└─_layout.jade
││├─index.jade
││└─pages.jade
│├─**js**
││├─**custom**
│││└─scripts.js
││└─**vendor**
│├─**less**
││├─**blocks**
│││├─btn.less
│││├─fonts.less
│││├─normalize.less
│││├─page-footer.less
│││├─page-header.less
│││├─scaffolding.less
│││├─sprite-position.less
│││├─type.less
│││├─ui.less
│││└─variables-custom.less -
││├─**mixins**
│││├─sprites.less
│││└─svg.less
││├─**vendor**
││└─style.less
│├─**svg**
││└─**sprite**
│├─.htaccess
│├─humans.txt
│└─robots.txt
├─.editorconfig
├─.gitattributes
├─.gitignore
├─.csscomb.json
├─gulpfile.js
├─bower.json
├─faviconData.json
├─package.json
├─template.mustache
├─CHANGELOG.md
└─README.MD
```

## Getting started
1. Clone repo `git clone git@github.com:vUdav/gulp-starter.git my-project` on your `devevelop` directory
2. Change project repo config `git remote set-url origin https://github.com/user/repo.git`
3. Go to project folder `cd my-project`
4. Install NPM dependencies `npm i`
5. Install Bower dependencies `bower i`
6. Build project `gulp build`
7. Start local server `gulp`

## Use GitHub pages
1. Go to `gulp/config.js`
2. Edit `ghpOptions.remoteUrl`, ex. `'git@github.com:vUdav/gulp-starter.git'`
3. Do command `gulp gh-pages`
4. Go to url (http://USERNAME.github.io/PROJECTNAME/)[http://USERNAME.github.io/PROJECTNAME/]

## Use FTP upload
1. Go to `gulp/config.js`
2. Edit ftp config value:
2.1. `host` - your IP or domain host
2.2. `user` - login user name
2.3. `pass` - login password
2.4. `remotePath` - path on ftp directory for project
3. Do command `gulp ftp` to upload files on FTP