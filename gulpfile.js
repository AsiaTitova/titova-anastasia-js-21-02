const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();



gulp.task('less', function (done) {
    gulp.src('./homework_03_less_animation/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./homework_03_less_animation'))
    done();
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './homework_03_less_animation'
        },
        port: 3000
    })
    gulp.watch('./homework_03_less_animation/**/*').on('change', browserSync.reload)
})

gulp.task('less:watch', function () {
    gulp.watch('./homework_03_less_animation/less/**/*.less', gulp.series('less'))
})

gulp.task('default', gulp.parallel('less:watch', 'serve'))
