var gulp = require('gulp');
var exec = require('child_process').exec;

var plugins = require('gulp-load-plugins')({
    pattern: ['*'],
    replaceString: /\bgulp[\-.]/
});

var dest = '../PyServer/static/';

gulp.task('servers', function (cb) {
    /*
    exec('node ../../ApiServer/app.js', function (err, stdout, stderr) {
        console.log('Starting API server...');
        console.log(stdout);
        console.log(stderr);
        console.log(err);
        cb(err);
    });
    */
    exec('npm run dev', function (err, stdout, stderr) {
        console.log('Starting webpack server...');
        console.log(stdout);
        console.log(stderr);
        console.log(err);
        cb(err);
    });
});

gulp.task('watch', function() {
    plugins.watch('src/*.*', function(vinyl) {
        console.log('Change detected, recompiling...');
        gulp.start('compile');
    });
});


gulp.task('compile', function () {
    const jsFilter = plugins.filter('**/*.js', { restore: true });
    const jsxFilter = plugins.filter('**/*.jsx', { restore: true });
    console.log(plugins);
    var browserified = plugins.vinylTransform(function (filename) {
        var b = plugins.browserify(filename);
        return b.bundle();
    });

    return gulp.src(['./src/*.jsx'])
        .pipe(plugins.react())
        .pipe(gulp.dest(dest + 'scripts'));

});

gulp.task('default', function () {
    
    const cssFilter = plugins.filter('**/*.less', { restore: true });
    const jsFilter = plugins.filter('**/*.js');

    return gulp.src(plugins.mainBowerFiles())
        .pipe(cssFilter)
        .pipe(plugins.less())
        .pipe(gulp.dest(dest + 'content'))
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe(gulp.dest(dest + 'scripts'));

});