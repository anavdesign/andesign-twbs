'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  pattern: '*',
  camelize: true
});
var spawn = require('child_process').spawn;
var jsNodeSrc;
var jsLibSrc;
var jsSrc;
var cssSrc;
var sassStyle;
var sassSrc;
var svgSrc;

var env = process.env.NODE_ENV || 'development';
var themeRoot = '../';

if (env === 'development') {
  sassStyle = 'expanded';
} else {
  sassStyle = 'compressed';
}

/**
 * Source Files
 */
jsNodeSrc = [
  './node_modules/bootstrap/dist/js/bootstrap.js',
  './node_modules/bootstrap/dist/js/bootstrap.js.map',
  './node_modules/masonry-layout/dist/masonry.pkgd.min.js',
];

jsLibSrc = [
  './js/lib/*.js',
];

jsSrc = [
  './js/vendor/*.js',
  './js/plugins/*.js',
  './js/scripts/*.js',
  './js/scripts.js'
];

cssSrc = [
  './bower_components/magnific-popup/dist/magnific-popup.css'
];

sassSrc = [
  './sass/**/*.scss'
];

svgSrc = '../images/svg/*.svg';

// Gulp File
gulp.task('auto-reload', function () {
  spawn('gulp', [], {stdio: 'inherit'});
  process.exit();
});

/*
 * Browsersync options
 * http://www.browsersync.io/docs/options
 */
gulp.task('browser-sync', function () {
  plugins.browserSync({
    files: [
      themeRoot,
      '../../../../modules/custom/'
    ],
    proxy: {
      target: 'http://drupal.test',
      ws: true
    },
    open: 'local',
    browser: 'google chrome',
  });
});

/**
 * Node Library Scripts
 */
gulp.task('jsNode', function () {
  gulp.src(jsNodeSrc)
    .pipe(gulp.dest(themeRoot + 'js'));
});

/**
 * Library Scripts
 */
gulp.task('jsLib', function () {
  gulp.src(jsLibSrc)
    .pipe(plugins.plumber())
    .pipe(plugins.filter('**/*.js'))
    .on('error', plugins.util.log)
    .pipe(plugins.stripComments())
    .pipe(plugins.if(env === 'production', plugins.uglify()))
    .pipe(gulp.dest(themeRoot + 'js'));
});

/**
 * Scripts
 */
gulp.task('js', function () {
  gulp.src(plugins.mainBowerFiles().concat(jsSrc))
    .pipe(plugins.plumber())
    .pipe(plugins.filter('**/*.js'))
    .pipe(plugins.concat('scripts.js'))
    .on('error', plugins.util.log)
    .pipe(plugins.stripComments())
    .pipe(plugins.if(env === 'production', plugins.uglify()))
    .pipe(gulp.dest(themeRoot + 'js'));
});

/**
 * Node Library Styles
 */
gulp.task('cssNode', function () {
  gulp.src(cssSrc)
    .pipe(gulp.dest(themeRoot + 'css'));
});

/**
 * SASS
 */
gulp.task('sass', function () {
  gulp.src([
    './sass/bootstrap/bootstrap.scss',
    './sass/base/base.scss',
    './sass/components/components.scss',
    './sass/content/content.scss',
    './sass/drupal/drupal.scss',
    './sass/layout/layout.scss',
    './sass/navigation/navigation.scss',
    './sass/plugins/plugins.scss',
    './sass/print/print.scss',
    './sass/search/search.scss',
    './sass/theme/theme.scss',
    './sass/lib/scroll-top.scss',
    './sass/lib/sticky-header.scss',
    './sass/lib/viewport-size.scss',
  ])
    .pipe(plugins.plumber())
    .pipe(plugins.sassGlob())
    .pipe(plugins.sass({
      outputStyle: sassStyle
    }).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      cascade: false,
      remove: false
    }))
    .pipe(plugins.stripCssComments())
    .pipe(plugins.groupCssMediaQueries())
    .pipe(plugins.if(env === 'development', plugins.sourcemaps.init()))
    .pipe(plugins.if(env === 'development', plugins.sourcemaps.write()))
    .pipe(gulp.dest(themeRoot + 'css'));
});

/**
 * SVG
 */
gulp.task('svg', function () {
  return gulp.src(svgSrc)
    .pipe(plugins.rename(function (opt) {
      opt.basename = 'icon-' + opt.basename.split(/_(.+)/)[1];
      return opt;
    }))
    .pipe(plugins.svgmin())
    .pipe(plugins.svgstore({ inlineSvg: true }))
    .pipe(plugins.cheerio({
      run: function ($, file) {
        $('svg').addClass('hidden');
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(plugins.rename('icons.svg'))
    .pipe(gulp.dest(themeRoot + 'images'));
});

/**
 * Watch Files
 */
gulp.task('watch', function () {
  gulp.watch(jsSrc, ['js']);
  gulp.watch(jsLibSrc, ['jsLib']);
  gulp.watch(sassSrc, ['sass']);
  gulp.watch(svgSrc, ['svg']);
  gulp.watch('gulpfile.js', ['auto-reload']);
});

gulp.task('default', ['sass', 'cssNode', 'jsNode', 'jsLib', 'js', 'svg', 'browser-sync', 'watch']);
