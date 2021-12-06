
// const gulp = require('gulp');
const { src, dest } = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));

function style() {
    return src('./scss/*.scss')
    .pipe(sass())
    .pipe(dest('./assets/css/'));
}

exports.style = style;
