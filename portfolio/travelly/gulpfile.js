const gulp = require('gulp'),
      concat = require('gulp-concat'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass'),
      smartgrid = require('smart-grid'),
      browserSync = require('browser-sync').create();


function styles() {
  return gulp.src('./src/sass/main.scss')
          .pipe(sass().on('error', sass.logError))
          //.pipe(concat('main.css')) // используем модуль concat который скачали и подключили, какое название пропишем такой файл и создастся
          .pipe(autoprefixer({
             browsers: ['> 0.1%'],
             cascade: false
           }))
          .pipe(cleanCSS({
            level: 2
          }))
          .pipe(gulp.dest('./build/css'))
          .pipe(browserSync.stream());
}

// function scripts() {
//   return gulp.src('./src/js/main.js')
//           //.pipe(concat('main.js'))
//           .pipe(uglify({
//             toplevel: true
//           }))
//           .pipe(gulp.dest('./build/js'))
//           .pipe(browserSync.stream());
// }

function watch() {
  browserSync.init({
      server: {
          baseDir: "./build"
      },
      //tunnel: true
  });
  gulp.watch('./src/sass/**/*.scss', styles);
  // gulp.watch('./src/js/**/*.js');
  gulp.watch('./build/*.html').on('change', browserSync.reload);
}

gulp.task('grid', async () => {
  smartgrid('src/sass', {
    outputStyle: 'scss',
    container: {
      maxWidth: '1170px'
    }
  })
})

gulp.task('build', gulp.series(styles, watch));
