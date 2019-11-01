var gulp = require('gulp');

var cleanCSS = require('gulp-clean-css');

var reName = require('gulp-rename');

var uncss = require('gulp-uncss');

gulp.task('default', function () {
    return gulp.src('test/public_html/assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(reName('styles.min.css'))
        .pipe(uncss({html:['test/public_html/index.html']}))
        .pipe(gulp.dest('test/public_html/assets/css'));
});