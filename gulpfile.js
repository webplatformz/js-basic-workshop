var gulp = require('gulp'), connect = require('gulp-connect'), open = require('gulp-open');
var Server = require('karma').Server;

gulp.task('connect', function() {
    connect.server({
        root: ["public", "exercises"],
        livereload: true
    });
});

gulp.task('js', function () {
    gulp.src('exercises/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['exercises/**'], ['js']);
});

gulp.task('open', function(){
    var options = {
        uri: 'http://localhost:8080/index.html',
        app: 'chrome'
    };
    gulp.src(__filename)
        .pipe(open(options));
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('default', ['connect', 'watch', 'open', 'test']);