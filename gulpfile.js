// gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var shell = require('child_process').exec;
var fs = require('fs');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglifyjs');
var cssmin = require('gulp-cssmin');


var build_dest = './public';

var deps = [
    'assets/libs/bower_components/angular/angular.js',
    'assets/libs/bower_components/angular-animate/angular-animate.js',
    'assets/libs/bower_components/angular-messages/angular-messages.js',
    'assets/libs/bower_components/angular-ui-router/release/angular-ui-router.js',
    'assets/libs/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    'assets/libs/bower_components/satellizer/satellizer.js'
];

var htmlFiles = [
    'app/index.html',
    'app/**/*.html',
    '!app/node_modules'
];

var jsFiles = [
    'app/*.js',
    'app/**/*.js',
    '!app/node_modules/**'
];

var cssFiles = [
    'assets/libs/bower_components/bootstrap/dist/css/bootstrap.css',
    'assets/css/*.css',
    'assets/*.scss',
    'assets/**/*.scss',
    '!app/node_modules/**'
];


gulp.task('default', ['js', 'deps', 'templates', 'sass', 'css']);

gulp.task('watch', ['default', '_watch']);

gulp.task('prod', ['js.min', 'deps.min', 'templates', 'sass', 'css.min']);



gulp.task('_watch', function () {
    gulp.watch(jsFiles, ['js']);
    gulp.watch(cssFiles, ['sass']);
    gulp.watch(htmlFiles, ['templates', 'index']);
});

gulp.task('js', function () {
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('js.min', function () {
    return gulp.src(jsFiles)
        // .pipe(ngAnnotate())
        .pipe(uglify('app.js'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('html', function () {
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('templates', function () {
    gulp.src(htmlFiles)
        .pipe(templateCache({root: 'app/', standalone: true}))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('index', function () {
    gulp.src(['app/index.html'])
        .pipe(concat('index.html'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('deps', function () {
    return gulp.src(deps)
        .pipe(concat('deps.js'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('deps.min', function () {
    return gulp.src(deps)
        .pipe(concat('deps.js'))
        .pipe(uglify('deps.js'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('sass', function () {
    return gulp.src(cssFiles)
        .pipe(sass())
        .pipe(concat('deps.css'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('css', function () {
    return gulp.src(cssFiles)
        .pipe(concat('deps.css'))
        .pipe(gulp.dest(build_dest));
});

gulp.task('sass.min', function () {
    return gulp.src(cssFiles)
         .pipe(sass())
        .pipe(concat('deps.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(build_dest));
});






