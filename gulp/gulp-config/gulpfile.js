var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    htmlMin = require('gulp-htmlmin'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    inject = require('gulp-inject');

gulp.task('html', function() {
  gulp.src('index.html')
      .pipe(htmlMin({
        removeComments: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
      }))
      .pipe(gulp.dest('./dist'))
})

gulp.task('less', function() {
  gulp.src('src/less/index.less')
      .pipe(less())
      .pipe(autoprefixer('last 5 versions', 'ie 8', 'ie 9'))
      .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function() {
  gulp.src('src/js/*.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'))
})

gulp.task('inject', function() {
  gulp.src('index.html')
      .pipe(inject(gulp.src('dist/js/*.js', {read: false}), {relative: true}))
      .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['less', 'js', 'inject'])
