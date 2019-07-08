const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

//Compile scss into css

function style()
{
    //1.  Where is the my scss file
    return gulp.src('./SCSS/**/*.scss')

    //2. Pass file through sass compiler
    .pipe(sass())

    //3 .where do i have complie css file

    .pipe(gulp.dest('./css'))

    //4 . Stream Changes to all Browser

    .pipe(browserSync.stream());
}

function watch()
{
    browserSync.init({
        server : {
            baseDir: './'
        }

    });
    gulp.watch('./scss/**/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}
exports.style =style;
exports.watch =watch;
