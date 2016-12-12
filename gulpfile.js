'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpConcat = require('gulp-concat');

var _gulpConcat2 = _interopRequireDefault(_gulpConcat);

var _gulpUglify = require('gulp-uglify');

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

var _gulpCssmin = require('gulp-cssmin');

var _gulpCssmin2 = _interopRequireDefault(_gulpCssmin);

var _gulpChange = require('gulp-change');

var _gulpChange2 = _interopRequireDefault(_gulpChange);

var _gulpBabel = require('gulp-babel');

var _gulpBabel2 = _interopRequireDefault(_gulpBabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var srcPaths = {
    components: './Scripts/components',
    node_modules: './node_modules'
};

var destPaths = {
    js: './wwwroot/js',
    lib: './wwwroot/lib'
};

_gulp2.default.task('components', function () {
    return _gulp2.default.src(srcPaths.components + '/*.jsx').pipe((0, _gulpBabel2.default)({
        plugins: ['transform-react-jsx'],
        presets: ['es2016']
    })).pipe((0, _gulpConcat2.default)('components.js')).pipe((0, _gulpChange2.default)(function (content) {
        return '\'use strict\'; ' + content.replace(/import React from 'React';\n/g, "").replace(/'use strict';\n/g, "");
    })).pipe(_gulp2.default.dest(destPaths.js));
});

_gulp2.default.task('plugins:js', function () {
    return _gulp2.default.src([srcPaths.node_modules + '/react/dist/react.min.js', srcPaths.node_modules + '/react-dom/dist/react-dom.min.js', srcPaths.node_modules + '/babel-standalone/babel.min.js', srcPaths.node_modules + '/jquery/dist/jquery.min.js', srcPaths.node_modules + '/tether/dist/js/tether.min.js', srcPaths.node_modules + '/bootstrap/dist/js/bootstrap.min.js']).pipe((0, _gulpConcat2.default)('plugins.js'))
    //.pipe(uglify())
    .pipe(_gulp2.default.dest(destPaths.lib));
});

_gulp2.default.task('plugins:css', function () {
    return _gulp2.default.src([srcPaths.node_modules + '/tether/dist/css/tether.min.css', srcPaths.node_modules + '/tether/dist/css/tether-theme-arrows.min.css', srcPaths.node_modules + '/tether/dist/css/tether-theme-arrows-dark.min.css', srcPaths.node_modules + '/tether/dist/css/tether-theme-basic.min.css', srcPaths.node_modules + '/bootstrap/dist/css/bootstrap.min.css', srcPaths.node_modules + '/bootstrap/dist/css/bootstrap-flex.min.css', srcPaths.node_modules + '/bootstrap/dist/css/bootstrap-grid.min.css', srcPaths.node_modules + '/bootstrap/dist/css/bootstrap-reboot.min.css']).pipe((0, _gulpConcat2.default)('plugins.css'))
    //.pipe(cssmin())
    .pipe(_gulp2.default.dest(destPaths.lib));
});

_gulp2.default.task('all', ['components', 'plugins:js', 'plugins:css']);

_gulp2.default.watch(srcPaths.components + '/*.jsx', ['components']);
