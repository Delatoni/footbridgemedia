var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching css/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./practical_html"
    });

    gulp.watch("practical_html/*.css").on('change', browserSync.reload);
    gulp.watch("practical_html/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
