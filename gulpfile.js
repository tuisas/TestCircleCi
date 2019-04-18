/* Code Author Alejandro Gavilanes
 * version = 1
 * version = Date 18-apr-2019
 * Note = This code is used by CircleCI project to create a Continues delivery from GIT hub project.
 * Code has been adjusted to work with project https://github.com/tuisas/TUILinksPage directory structure
 * We use the JS GULP function to copy data from GITHUB to container that can then be used to deploy to FTP Server
 * This file must be loaded to GIT project so CircleCI can execute tasks
 */

// declare contanst for depencies used on code
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

// error handler
const errorHandler = r => {
	notify.onError( '\n\n❌  ===> ERROR: <%= error.message %>\n' )( r );
	beep();
};

/* gulp task format used to look at GIT project directory src and then dest is the location on docker container
 * that is initiated during deployment step on circleci
 * this function will look at all files in traget directory and copy including sub folders using double star on src
 * The task function name can be set to anything, but should be relevant
 */
gulp.task('images', function () {
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

gulp.task('scripts', function () {
    return gulp.src('./App/scripts/**/*').pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('html', function () {
    return gulp.src('./App/*.html').pipe(gulp.dest('./dist/'));
});

gulp.task('htaccess', function () {
    return gulp.src('./App/.htaccess').pipe(gulp.dest('./dist/'));
});


/*
 * Function commented out due to problems with JS that was rendering index.html not to load JS, browserfiy or uglify could be root cause
 * will need testing to make sure this does not corrupt JS when deployed to FTP server
 
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
 */

/* gulp task format used to look at GIT project directory src and then dest is the location on docker container
 * that is initiated during deployment step on circleci
 * This gulp function has a error handler to check css and scss syntax
 */ 
gulp.task('sass', function() {
  return gulp
    .src('./App/css/*.css')
		.pipe( plumber( () => {	notify.onError( '\n\n❌  ===> SASS ERROR %>\n' ) }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});



/*This task used to watch directorys on GIT hub and then add to series for use on Build task
 * also broswerSync is used to refresh key files on web server
 */
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

/*we have the build task that gathers all other tasks above apart from serve and then is ready for FTP upload
 * default task runs the serve task as final step
 */ 
gulp.task('build', gulp.series('admin','apps','client', 'sass', 'discretion', 'fonts', 'images', 'scripts', 'html' , 'htaccess'));
gulp.task('default', gulp.series('serve'));