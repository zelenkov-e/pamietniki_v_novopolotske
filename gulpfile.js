'use strict';
//gulpfile.js
// Load plugins
const browsersync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const merge = require('merge-stream');
const nodemon = require('gulp-nodemon');

// BrowserSync
// function browserSync(done) {
//   browsersync.init({
//     server: {
//       baseDir: './',
//     },
//     port: 3000,
//   });
//   done();
// }

function browserSync(done) {
  browsersync.init(null, {
    baseDir: './',
    proxy: 'http://localhost:5000',
    port: 3000,
  });
  done();
}

function nodemonSync(cb) {
  var started = false;

  nodemon({
    script: 'app.js',
  }).on('start', function() {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean vendor
function clean() {
  return del(['./vendor/']);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp
    .src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./vendor/bootstrap'));
  // jQuery
  var jquery = gulp
    .src(['./node_modules/jquery/dist/*', '!./node_modules/jquery/dist/core.js'])
    .pipe(gulp.dest('./vendor/jquery'));
  return merge(bootstrap, jquery);
}

// Watch files
function watchFiles() {
  gulp.watch('./**/*.js', browserSyncReload);
  gulp.watch('./**/*.css', browserSyncReload);
  gulp.watch('./**/*.html', browserSyncReload);
}

// Define complex tasks
const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor);
// const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync, nodemonSync));

// Export tasks
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.default = build;
