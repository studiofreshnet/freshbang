'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import del from 'del';

const basePath = 'assets/less';

const paths = {
    styles: {
        document: {
            main: 'www/assets/less/document/_main.less',
            src: 'www/assets/less/document/**/*.less',
            dest: 'www/assets/dist/css/'
        },
        layout: {
            main: 'www/assets/less/layout/_main.less',
            src: 'www/assets/less/layout/**/*.less',
            dest: 'www/assets/dist/css/'
        },
        core: {
            main: 'www/assets/less/core/_main.less',
            src: 'www/assets/less/core/**/*.less',
            dest: 'www/assets/dist/css/'
        },
        components: {
            main: 'www/assets/less/components/_main.less',
            src: 'www/assets/less/components/**/*.less',
            dest: 'www/assets/dist/css/'
        },
        ui: {
            main: 'www/assets/less/ui/_main.less',
            src: 'www/assets/less/ui/**/*.less',
            dest: 'www/assets/dist/css/'
        },
        vendor: {
            main: 'www/assets/less/vendor/_main.less',
            src: 'www/assets/less/vendor/**/*.less',
            dest: 'www/assets/dist/css/'
        },
    },
    scripts: {
        src: 'www/assets/js/**/*.js',
        dest: 'www/assets/dist/js/'
    }
};