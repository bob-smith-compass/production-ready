var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');



gulp.task('live-server', function(){
    var server = new liveServer('server/main.js');
    server.start();
})
// gulp.task('server', ['live-server'], function(){
gulp.task('server', function(){
    browserSync.init(null, {
        proxy: "http://localhost:9090",
        port: 9001
    })
    
})
/** Old way */
gulp.task('browserify', function(){
    return browserify({
        // pass starting point
        entries: 'server/main.js',
        debug: true

    })
    .transform(reactify) // will change all jsx to js 
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.temp'))

})
gulp.task('default', function(){

})

/** 
 * New way of doing gulp
 */
// let cb = function(){
//     console.info('Gulp is running');
// }
// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
//   exports.default = defaultTask
  