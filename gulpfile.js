var gulp = require('gulp')
var merge = require('merge-stream');

gulp.task('copy', function() {
	var allStreams =
		gulp.src('./app/assets/**/*').pipe(gulp.dest('./dist/assets/')),
		gulp.src(['./app/content/*.html'])pipe(gulp.dest(./dist/))
	
	return merge.apply(this, allStreams);
});
gulp.task('nextTask', [copy], funtion(){

});




