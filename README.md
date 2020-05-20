
<h1>Didgenation Theme for October CMS</h1>

<p>Lightweight optimized Gulp starter for October CMS theme development with Gulp 4, Browsersync, preprocessors (sass, scss, less, stylus), cleancss, uglify-es, autoprefixer, rsync and more. This Initial setup was a fork from : https://github.com/agragregra/OctoberCMS-Gulp-Starter and later was changed to adapt to this project</p>

<p>
	<img src="https://raw.githubusercontent.com/agragregra/agragregra.github.com/master/images/october-gulp-preview.jpg" alt="Optober Gulp">
</p>

<h2>Installation</h2>

<p>Step 1- Clone the git repository into your project  (Example : localhost://project)</p>

<p>Step 2- Open CMD as ADMINISTRATOR (very important) and install gulp globally</p>
  <code>npm install --global gulp-cli</code>

<p>Step 3- Via the CMD go into the root folder and write</p>
  <code>npm install</code>

<p>Step 4- Upload all the cartridges to the devbox via the command line (no eclipse needed)</p>
  <code>gulp upload</code>

<p>Step 5- To keep the project watch mode just write</p>
  <code>gulp --watch</code>

<h2>October CMS Theme Directory structure</h2>

<p>Recommends using the following base directory structure for you theme:</p>

<pre>
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
</pre>

<h2>Starter Features & Variables in gulpfile.js</h2>

<ol>
	<li><strong>Make proxy for live development with Browsersync</strong> - <code>let localhost</code></li>
	<li><strong>Simple preprocessor selection (sass, scss, less, styl)</strong> - <code>let preprocessor</code></li>
	<li><strong>Simple selection of the current theme</strong> - <code>let theme</code></li>
	<li><strong>Simple selection of file extensions to watch & reload</strong> - <code>let fileswatch</code></li>
	<li><strong>Better CSS</strong> - <code>gulp-clean-css, gulp-autoprefixer</code>. Importing framework extras CSS into theme preprocessor file</li>
	<li><strong>Better JS</strong> - <code>gulp-uglify-es</code>. Vendor scripts & framework extras plug into scripts functions.</li>
	<li><strong>Better deploy with rsync</strong> - <code>gulp-rsync</code></li>
</ol>

<h2>Exported Gulp Task</h2>

<ul>
	<li><strong>browsersync</strong></li>
	<li><strong>assets</strong> - Compile assets (CSS & JS)</li>
	<li><strong>styles</strong> - Compile and concat CSS with selected preprocessor</li>
	<li><strong>scripts</strong> - Compile, minify and concat JS with gulp-uglify-es & gulp-concat</li>
	<li><strong>deploy</strong> - deploy changes on server with gulp-rsync</li>
	<li><strong>gulp</strong> - The default command to start the environment</li>
</ul>

<h2>Built With</h2>
* [Node]((https://nodejs.org) - Core JS
* [Gulp]((https://http://gulpjs.com) - Dependency Management
* [SASS]((https://sass-lang.com) - SASS
* [SASS]((https://octobercms.com/) - October CMS

<h2>Versioning</h2>
1.0.0 (Release date: 5/16/2017)

About version please check [SemVer]((http://semver.org) for versioning.

<h2>Credits</h2>
* Project developed by DidgeNation Crew

<h2>License</h2>
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<h2>Acknowledgments</h2>
* Chuck Norris methodology ( http://www.shino.de/2010/02/20/scrum-norris/ )
* Didgeridoo rules

<h2>Markdown</h2>
[Markdown Styling codes]((https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
