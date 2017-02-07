# vUdav gulp starter pack
## Use technology:
* Jade
* Less
* Bower
* SVG

## Getting started
1. Clone repo `git clone git@github.com:vUdav/gulp-starter.git my-project` on your `devevelop` directory
2. Go to project folder `cd my-project`
3. Change project repo config `git remote set-url origin https://github.com/user/repo.git`
4. Clear `TODO`
5. Change `name` on `package.json`
6. Change `name` and `description` on `bower.json`
7. Clear, change or delete `CHANGELOG.md`
8. Clear, change or delete `README.MD`
9. Settings `gulp/config.js`
10. Settings `gulp/build.js`
11. Install NPM dependencies `npm i`
12. Install Bower dependencies `bower i`
13. Build project `gulp build`
14. Start local server `gulp`

## Create new page
Write on console `gulp new-page --page your-some-page --title your-some-title` or `gulp new-page` for default settings.

## Use GitHub pages
1. Go to `gulp/config.js`
2. Edit `ghpOptions.remoteUrl`, ex. `'git@github.com:vUdav/gulp-starter.git'`
3. Do command `gulp gh-pages`
4. Go to url http://USERNAME.github.io/PROJECTNAME/

## Use FTP upload
1. Go to `gulp/config.js`
2. Edit ftp config value:
2.1. `host` - your IP or domain host
2.2. `user` - login user name
2.3. `pass` - login password
2.4. `remotePath` - path on ftp directory for project
3. Do command `gulp ftp` to upload files on FTP