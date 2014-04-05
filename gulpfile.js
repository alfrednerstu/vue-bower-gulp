var gulp = require('gulp')
var concat = require('gulp-concat')
var bower = require('gulp-bower-files')

gulp.task('bower', function() {
    var stream = bower()
		.pipe(gulp.dest('lib'))
    return stream
})

gulp.task('scripts', ['bower'], function() {
	gulp.src(['lib/**/*.js', 'src/**/*.js', 'app.js'])
		.pipe(concat('build.js'))
		.pipe(gulp.dest('build'))
})

gulp.task('styles', ['bower'], function() {
	gulp.src(['lib/**/*.css', 'src/**/*.css'])
		.pipe(concat('build.css'))
		.pipe(gulp.dest('build'))
})

gulp.task('watch', function () {
	gulp.watch(['bower.json', 'src/**/*'], ['bower', 'scripts', 'styles'])
})

gulp.task('default', ['bower', 'scripts', 'styles'])
