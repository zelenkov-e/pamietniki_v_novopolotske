'use strict';

const browsersync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const merge = require('merge-stream');
const nodemon = require('gulp-nodemon');

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
    if (!started) {
      cb();
      started = true;
    }
  });
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function clean() {
  return del(['./vendor/']);
}

function modules() {
  var bootstrap = gulp
    .src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./vendor/bootstrap'));

  var jquery = gulp
    .src(['./node_modules/jquery/dist/*', '!./node_modules/jquery/dist/core.js'])
    .pipe(gulp.dest('./vendor/jquery'));
  return merge(bootstrap, jquery);
}

function watchFiles() {
  gulp.watch('./**/*.js', browserSyncReload);
  gulp.watch('./**/*.css', browserSyncReload);
  gulp.watch('./**/*.html', browserSyncReload);
}

const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync, nodemonSync));

exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.default = build;
