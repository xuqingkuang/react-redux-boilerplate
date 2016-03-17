// gulp modules
const gulp                    = require('gulp');
const gulpMinifyHTML          = require('gulp-htmlmin');

// webpack modules
const webpack                 = require('webpack');
const webpackDevMiddleware    = require('webpack-dev-middleware');
const webpackHotMiddleware    = require('webpack-hot-middleware');
const webpackConfig           = require('./webpack-config');
const webpackProductionConfig = require('./webpack-production-config');

// Others
const path                    = require('path');
const express                 = require('express');
const jest                    = require('jest-cli');
const del                     = require('del');

const devCompiler             = webpack(webpackConfig);

const config = {
  port: 8000,
  host: '0.0.0.0',
  staticDir: './assets',
  minifyHTML: {
    collapseWhitespace: true
  },
  test: {
    rootDir: 'src',
    collectCoverage: true,
    unmockedModulePathPatterns: ['./node_modules/react']
  }
}

/*
 * Development tasks
 */

gulp.task('dev-server', () => {
  const app = express();
  app.use(webpackDevMiddleware(devCompiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(devCompiler));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `${config.staticDir}/index.html`));
  });
  app.listen(config.port, config.host, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Listening at http://${config.host}:${config.port}`);
  });

  /* Handle Ctrl + C pressed in Docker */
  process.on('SIGINT', () => {
    console.log('Exiting...');
    process.exit();
  });
});

gulp.task('test', function (done) {
  jest.runCLI({ config : config.test }, ".", () => { done(); });
});

/*
 * Production tasks
 */

gulp.task('minify', () => {
  gulp.src(`${config.staticDir}/**/*.html`)
    .pipe(gulpMinifyHTML(config.minifyHTML))
    .pipe(gulp.dest(webpackConfig.output.path))
});

gulp.task('build', (done) => {
  webpack(webpackProductionConfig, (err, stats) => {
    if (err) {
      throw(`webpack:build - ${err}`);
    }
    console.log('[webpack:build]', stats.toString({colors: true}));
    done();
  });
});

/*
 * Common tasks
 */

gulp.task('copy-assets', () => {
  gulp.src(`${config.staticDir}/**`)
    .pipe(gulp.dest(webpackConfig.output.path))
});
gulp.task('clean', (done) => {
  del([`${webpackConfig.output.path}/*`], done);
});
gulp.task('default', ['dev-server']);
gulp.task('production', ['copy-assets', 'build'], () => { gulp.run('minify'); });
