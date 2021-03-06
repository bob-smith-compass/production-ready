var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

gulp.task('stylus', function() {
    return gulp.src('./stylus/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['stylus'], function() {
    
    browserSync.init({
        server: './'
    });

    gulp.watch("./stylus/main.styl", ['stylus']);
    gulp.watch("./index.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);