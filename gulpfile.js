'use strict';
var gulp            = require('gulp');
var gutil           = require('gulp-util');
var watch           = require('gulp-watch');
var gp_concat       = require('gulp-concat');
var gp_sourcemaps   = require('gulp-sourcemaps');

// *************** JavaScripts *************************************************

// Concate JS files and make sourcemap
gulp.task('js', function(){
    return gulp.src(scripts)
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('main.js'))
        .pipe(gulp.dest('./js/dist/'))
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('./js/dist/'));
});

// Run watcher for file change and run JS task
gulp.task('watch-js', function() {
    watch(['./js/**/*.js', '!./js/dist/*.js'], function() {
        gulp.start('js')
        .on('error', gutil.log);
    });
});

// ************** Main runnner *************************************************
gulp.task('run', function() {
    gulp.start([
        // JS
        'js', 
        'watch-js'
    ])
    .on('error', gutil.log);
});

var scripts = [
        './js/libs/jquery-1.12.4.min.js',
        './js/libs/modernizr-2.8.3.min.js',
        './js/libs/angular-1.5.5.min.js',
    
        // Controllers
        './js/controllers/mainController.js',
        './js/controllers/trainerController.js',

        // Services
        './js/services/trainer.js',
        

        // App
        './js/app.js'
];

