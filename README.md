
# Didgenation Theme for October CMS - test

Lightweight optimized Gulp starter for October CMS theme development with Gulp 4, Browsersync, preprocessors (sass, scss, less, stylus), cleancss, uglify-es, autoprefixer, rsync and more. This Initial setup was a fork from : https://github.com/agragregra/OctoberCMS-Gulp-Starter and later was changed to adapt to this project

## Installation

* Step 1- Clone the git repository into your project  (Example : localhost://project)

* Step 2- Open CMD as ADMINISTRATOR (very important) and install gulp globally
  ```
  npm install --global gulp-cli
  ```
* Step 3- Via the CMD go into the root folder and write
  ```
  npm install
  ```

* Step 4- Upload all the cartridges to the devbox via the command line (no eclipse needed)
  ```
  gulp upload
  ```

* Step 5- To keep the project watch mode just write
  ```
  gulp
	```

## October CMS Theme Directory structure

Recommends using the following base directory structure for you theme:

 ```
themes/
— mytheme/           <= Theme starts here
— — pages/             <= Pages directory
— — — home.htm
— — layouts/           <= Layouts directory
— — — default.htm
— — partials/          <= Partials directory (Optional)
— — — header.htm
— — — footer.htm
— — content/           <= Content directory
— — — intro.htm
— — assets/            <= Assets directory
— — — css/
— — — — theme.min.css  <= Minified styles
— — — js/
— — — — app.js         <= Main user JavaScript file
— — — — theme.min.js   <= Minified scripts
— — — images/
— — — sass/            <= Preprocessor folder (Maybe sass, scss, less, styl)
— — — — theme.sass     <= Main user Sass file (Maybe theme.sass, theme.scss, theme.less or theme.styl)
— — — vendor/          <= Vendor scripts or styles (For example - jQuery, Bootstrap, etc..)
— — theme.yaml
 ```

## Starter Features & Variables in gulpfile.js

1. Make proxy for live development with Browsersync ```let localhost```

2. Simple preprocessor selection (sass, scss, less, styl ```let preprocessor```

3. Simple selection of the current theme ```let theme```

4. Simple selection of file extensions to watch & reload - ```let fileswatch```

5. Better CSS - ```gulp-clean-css``` or  ```gulp-autoprefixer```. Importing framework extras CSS into theme preprocessor file

6. Better JS - ```gulp-uglify-es```. Vendor scripts & framework extras plug into scripts functions.

7. Better deploy with rsync - ```gulp-rsync```


## Exported Gulp Task

*	browsersync
*	assets - Compile assets (CSS & JS)
*	styles - Compile and concat CSS with selected preprocessor
*	scripts - Compile, minify and concat JS with gulp-uglify-es & gulp-concat
*	deploy - deploy changes on server with gulp-rsync
*	gulp - The default command to start the environment

## Built With
* [Node](https://nodejs.org) - Core JS
* [Gulp](https://http://gulpjs.com) - Dependency Management
* [SASS](https://sass-lang.com) - SASS
* [SASS](https://octobercms.com/) - October CMS

## Versioning
1.0.0 (Release date: 5/16/2017)

About version please check [SemVer](http://semver.org) for versioning.

## Credits
* Project developed by DidgeNation Crew

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* Chuck Norris [methodology](http://www.shino.de/2010/02/20/scrum-norris)
* Didgeridoo rules

## Markdown
Markdown [Styling codes](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
