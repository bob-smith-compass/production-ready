var gulp = require('gulp');
var liveServer = require('gulp-live-server');

gulp.task('live-server', function(){
    var server = new liveServer('server/main.js');
    server.start();
})
gulp.task('default', function(){
    
})
