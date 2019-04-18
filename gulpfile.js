const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const headerfooter = require('gulp-headerfooter');
const browserSync = require('browser-sync').create();
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const plumber = require( 'gulp-plumber' );
const beep = require( 'beepbeep' );
const notify = require( 'gulp-notify' ); // Sends message notification to you.


const errorHandler = r => {
	notify.onError( '\n\n❌  ===> ERROR: <%= error.message %>\n' )( r );
	beep();
};

gulp.task('images', function() {
  return gulp.src('./App/images/**/*').pipe(gulp.dest('./dist/images/'));
});

gulp.task('admin', function () {
    return gulp.src('./App/admin/**/*').pipe(gulp.dest('./dist/admin/'));
});

gulp.task('apps', function () {
    return gulp.src('./App/apps/**/*').pipe(gulp.dest('./dist/apps/'));
});

gulp.task('client', function () {
    return gulp.src('./App/client/**/*').pipe(gulp.dest('./dist/client/'));
});

gulp.task('discretion', function () {
    return gulp.src('./App/discretion/**/*').pipe(gulp.dest('./dist/discretion/'));
});

gulp.task('fonts', function () {
    return gulp.src('./App/fonts/**/*').pipe(gulp.dest('./dist/fonts/'));
});


gulp.task('scripts', function() {
  return gulp
    .src('App/scripts/*.js')
		.pipe( plumber( errorHandler ) )
    .pipe(
      babel({
        presets: ['env']
      })
    ) 
    .pipe(browserify()) 
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('sass', function() {
  return gulp
    .src('./App/css/*.css')
		.pipe( plumber( () => {	notify.onError( '\n\n❌  ===> SASS ERROR %>\n' ) }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
  return gulp
    .src('./App/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('htaccess', function () {
    return gulp
        .src('./App/.htaccess')
        .pipe(gulp.dest('./dist/'));
});


gulp.task('serve', gulp.series('sass', 'html', 'scripts', 'images', function() {
  browserSync.init({
    server: './dist',
    open: true // set to false to disable browser autostart
  });
  gulp.watch('App/admin/*.html', gulp.series('admin'));
  gulp.watch('App/apps/**/*', gulp.series('apps'));
  gulp.watch('App/client/**/*', gulp.series('client'));
  gulp.watch('App/css/**/*', gulp.series('sass'));
  gulp.watch('App/discretion/**/*', gulp.series('discretion'));
  gulp.watch('App/fonts/**/*', gulp.series('fonts'));
  gulp.watch('App/Images/**/*', gulp.series('images'));
  gulp.watch('App/scripts/*.js', gulp.series('scripts'));
  gulp.watch('App/*.html', gulp.series('html'));
  gulp.watch('App/.htaccess', gulp.series('htaccess'));
  gulp.watch('dist/scripts/*.js').on('change', browserSync.reload);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
}));

gulp.task('build', gulp.series('admin','apps','client', 'sass', 'discretion', 'fonts', 'images', 'scripts', 'html' , 'htaccess'));
gulp.task('default', gulp.series('serve'));