'use strict';

import gulp from 'gulp'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import cssmin from 'gulp-cssmin'
import change from 'gulp-change'
import babel from 'gulp-babel'

const srcPaths = {
    components: './Scripts/components',
    node_modules: './node_modules'
}

const destPaths = {
    js: './wwwroot/js',
    lib: './wwwroot/lib'
}

gulp.task('components', () => gulp
    .src(`${srcPaths.components}/*.jsx`)
    .pipe(babel({
        plugins: ['transform-react-jsx'],
        presets: ['es2016']
    }))
    .pipe(concat('components.js'))
    .pipe(change((content) => 
        `'use strict'; ${
            content
                .replace(/import React from 'React';\n/g, "")
                .replace(/'use strict';\n/g, "")
        }`
        
    ))
    .pipe(gulp.dest(destPaths.js))
);

gulp.task('plugins:js', () => gulp
    .src([
        `${srcPaths.node_modules}/react/dist/react.min.js`,
        `${srcPaths.node_modules}/react-dom/dist/react-dom.min.js`,
        `${srcPaths.node_modules}/babel-standalone/babel.min.js`,
        `${srcPaths.node_modules}/jquery/dist/jquery.min.js`,
        `${srcPaths.node_modules}/tether/dist/js/tether.min.js`,
        `${srcPaths.node_modules}/bootstrap/dist/js/bootstrap.min.js`
    ])
    .pipe(concat('plugins.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(destPaths.lib))
);

gulp.task('plugins:css', () => gulp
    .src([
        `${srcPaths.node_modules}/tether/dist/css/tether.min.css`,
        `${srcPaths.node_modules}/tether/dist/css/tether-theme-arrows.min.css`,
        `${srcPaths.node_modules}/tether/dist/css/tether-theme-arrows-dark.min.css`,
        `${srcPaths.node_modules}/tether/dist/css/tether-theme-basic.min.css`,
        `${srcPaths.node_modules}/bootstrap/dist/css/bootstrap.min.css`,
        `${srcPaths.node_modules}/bootstrap/dist/css/bootstrap-flex.min.css`,
        `${srcPaths.node_modules}/bootstrap/dist/css/bootstrap-grid.min.css`,
        `${srcPaths.node_modules}/bootstrap/dist/css/bootstrap-reboot.min.css`
    ])
    .pipe(concat('plugins.css'))
    //.pipe(cssmin())
    .pipe(gulp.dest(destPaths.lib))
);

gulp.task('all', ['components', 'plugins:js', 'plugins:css']);

gulp.watch(`${srcPaths.components}/*.jsx`, ['components']);