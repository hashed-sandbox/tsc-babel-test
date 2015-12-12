import gulp    from 'gulp';
import babel   from 'gulp-babel';
import plumber from 'gulp-plumber';
import tsc     from 'gulp-typescript';

const src_path = `./src/**/*.ts`,

      tsc_options = {
        module: "commonjs",
        target: "es6",
        noImplicitAny: true,
        sourceMap: true
      };

gulp.task(`build`, () => {
  return gulp.src(src_path)
    .pipe(plumber())
    .pipe(tsc(tsc_options))
    .pipe(babel())
    .pipe(gulp.dest(`./bin`));
});

gulp.task(`watch`, () => {
  return gulp.watch(src_path, [`build`]);
});

gulp.task(`default`, [`build`, `watch`]);
