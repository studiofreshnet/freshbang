'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify-es';
import rename from 'gulp-rename';
import del from 'del';

sass.compiler = require('node-sass');

const assetsPath = './www/assets';

const paths = {
	styles: {
		vendor: {
			main: assetsPath + '/scss/vendor/main.scss',
			src: assetsPath + '/scss/vendor/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		document: {
			main: assetsPath + '/scss/document/main.scss',
			src: assetsPath + '/scss/document/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		core: {
			main: assetsPath + '/scss/core/main.scss',
			src: assetsPath + '/scss/core/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		components: {
			main: assetsPath + '/scss/components/main.scss',
			src: assetsPath + '/scss/components/**/*.scss',
			dest: assetsPath + '/dist/css/'
		},
		ui: {
			main: assetsPath + '/scss/ui/main.scss',
			src: assetsPath + '/scss/ui/**/*.scss',
			dest: assetsPath + '/dist/css/'
		}
	},
	scripts: {
		src: assetsPath + '/js/**/*.js',
		dest: assetsPath + '/dist/js/'
	}
};

export const clean = () => del([ assetsPath + '/dist' ]);

export function vendorStyles() {
	return gulp.src(paths.styles.vendor.main)
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(rename({
			basename: '1-vendor',
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.styles.vendor.dest));
}

export function documentStyles() {
	return gulp.src(paths.styles.document.main)
		.pipe(sass())
		.pipe(sourcemaps.init())
			.pipe(sourcemaps.identityMap())
			.pipe(sourcemaps.write(''))
		.pipe(cleanCSS())
		.pipe(rename({
			basename: '2-document',
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.styles.document.dest));
}

export function coreStyles() {
	return gulp.src(paths.styles.core.main)
		.pipe(sass())
		.pipe(sourcemaps.init())
			.pipe(sourcemaps.identityMap())
			.pipe(sourcemaps.write(''))
		.pipe(cleanCSS())
		.pipe(rename({
			basename: '3-core',
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.styles.core.dest));
}

function watchFiles() {
	gulp.watch(paths.styles.vendor.src, vendorStyles);
	gulp.watch(paths.styles.document.src, documentStyles);
	gulp.watch(paths.styles.core.src, coreStyles);
}

export { watchFiles as watch };

const build = gulp.series(clean, gulp.parallel(vendorStyles, documentStyles, coreStyles));

export default build;
