var gulp = require('gulp');
var war = require('gulp-war');
var zip = require('gulp-zip');

gulp.task('war', function () {
    gulp.src(["dist/*.*"])
        .pipe(war({
            welcome: 'dist/index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('myApp.war'))
        .pipe(gulp.dest("./prod"));

});