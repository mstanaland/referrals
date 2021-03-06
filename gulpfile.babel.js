'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import wrap from 'gulp-wrap';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import gulpif from 'gulp-if';
import sass from 'gulp-sass';
import yargs from 'yargs';
import ngAnnotate from 'gulp-ng-annotate';
import templateCache from 'gulp-angular-templatecache';
import server from 'browser-sync';
import del from 'del';
import path from 'path';
import child from 'child_process';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import beep from 'beepbeep';

const exec = child.exec;
const argv = yargs.argv;
const root = 'src/';
const paths = {
  dist: './dist/',
  scripts: [`${root}/app/**/*.js`, `!${root}/app/**/*.spec.js`],
  tests: `${root}/app/**/*.spec.js`,
  styles: `${root}/sass/**/*.{sass,scss}`,
  templates: `${root}/app/**/*.html`,
  modules: [
    'angular/angular.js',
    'angular-ui-router/release/angular-ui-router.js',
    // 'angular-ui-bootstrap/dist/ui-bootstrap.js',
    'angular-aria/angular-aria.js',
    'jquery/dist/jquery.js',
    'bootstrap-sass/assets/javascripts/bootstrap.js'
  ],
  maps: [
    'angular-ui-router/release/angular-ui-router.js.map',
  ],
  static: [
    `${root}/index.html`,
    `${root}/fonts/**/*`,
    `${root}/images/**/*`,
  ]
};

server.create();

gulp.task('clean', cb => del(paths.dist + '**/*', cb));

gulp.task('templates', () => {
  return gulp.src(paths.templates)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(templateCache({
      root: 'app',
      standalone: true,
      transformUrl: function (url) {
        return url.replace(path.dirname(url), '.');
      }
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('vendor', ['templates'], () => {
  return gulp.src(paths.modules.map(item => 'node_modules/' + item))
    .pipe(concat('vendor.js'))
    .pipe(gulpif(argv.deploy, uglify()))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('bundle', ['vendor'], () => {
  return gulp.src([
      `!${root}/app/**/*.spec.js`,
      `${root}/app/**/*.module.js`,
      ...paths.scripts,
      './templates.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(gulpif(argv.deploy, uglify()))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('scripts', ['bundle'], () => {
  return gulp.src(paths.maps.map(item => 'node_modules/' + item))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(plumber(function() {
      beep();
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist + 'css/'));
});

gulp.task('serve', ['scripts', 'styles'], () => {
  return server.init({
    files: [`${paths.dist}/**`],
    port: 4000,
    server: {
      baseDir: paths.dist
    },
    notify: false
  });
});

gulp.task('copy', ['clean'], () => {
  return gulp.src(paths.static, { base: 'src' })
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', ['serve', 'scripts'], () => {
  gulp.watch([paths.scripts, paths.templates], ['scripts']);
  gulp.watch([paths.styles], ['styles']);
});

// gulp.task('firebase', ['styles', 'scripts'], cb => {
//   return exec('firebase deploy', function (err, stdout, stderr) {
//     console.log(stdout);
//     console.log(stderr);
//     cb(err);
//   });
// });

gulp.task('default', [
  'copy',
  'scripts',
  'styles',
  'serve',
  'watch'
]);

// gulp.task('production', [
//   'copy',
//   'scripts',
//   'firebase'
// ]);
