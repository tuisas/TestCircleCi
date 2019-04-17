var gulp = require('gulp')
gulp.task('copy', function() {
	return gulp.src(['./app/assets/**/*']).pipe(gulp.dest('./dist/assets/')) 
});
gulp.task('build', 'copy', function(){
});