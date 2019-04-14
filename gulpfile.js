const { watch, series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

function sassAndAuto () {
  return src('scss/app.scss')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass({
      includePaths: ['scss']
    }))
    .pipe(dest('css'))
}

// eslint-disable-next-line semi
exports.sassAndAuto = sassAndAuto;
// eslint-disable-next-line semi
exports.default = series(sassAndAuto);
// eslint-disable-next-line semi
watch(['scss/*.scss'], series(sassAndAuto));
