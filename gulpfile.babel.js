'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import del from 'del';

const assetsPath = 'www/assets';

const paths = {
	styles: {
		document: {
			main: assetsPath + '/scss/document/_main.scss',
			src: assetsPath + '/scss/document/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		layout: {
			main: assetsPath + '/scss/layout/_main.scss',
			src: assetsPath + '/scss/layout/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		core: {
			main: assetsPath + '/scss/core/_main.scss',
			src: assetsPath + '/scss/core/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		components: {
			main: assetsPath + '/scss/components/_main.scss',
			src: assetsPath + '/scss/components/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		ui: {
			main: assetsPath + '/scss/ui/_main.scss',
			src: assetsPath + '/scss/ui/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		vendor: {
			main: assetsPath + '/scss/vendor/_main.scss',
			src: assetsPath + '/scss/vendor/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
	},
	scripts: {
		src: assetsPath + '/js/**/*.js',
		dest: assetsPath + '/dist/js/'
	}
};