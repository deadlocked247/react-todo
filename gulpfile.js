var gulp  = require('gulp'),
    babel = require('gulp-babel')
    watch = require('gulp-watch')
    react = require('gulp-react');

var paths = {
  babel: 'app/*.jsx',
  build: 'app/dist'
};

gulp.task('build', function() {
  return gulp
    .src(paths.babel)
    .pipe(react({harmony: false, es6module: true}))
    .pipe(babel({
		presets: ['es2015']
	}))

    .pipe(gulp.dest(paths.build));
});

gulp.task('watch', ['build'], function() {
  return watch(paths.babel, function() {
    gulp.start('build');
  });
});

gulp.task('default', ['build']);
