// gulp modules
const gulp                    = require('gulp')
const gulpMinifyHTML          = require('gulp-minify-html')

// webpack modules
const webpack                 = require('webpack')
const webpackDevMiddleware    = require('webpack-dev-middleware')
const webpackHotMiddleware    = require('webpack-hot-middleware')
const webpackConfig           = require('./webpack-config')
const webpackProductionConfig = require('./webpack-production-config')

// Others
const path                    = require('path')
const express                 = require('express')
const del                     = require('del')

const devCompiler             = webpack(webpackConfig)

const config = {
  port: 8000,
  host: 'localhost',
  minifyHTML: {
    comments: true,
    spare: true
  }
}

/*
 * Development tasks
 */

gulp.task("dev-server", () => {
  app = express();
  app.use(webpackDevMiddleware(devCompiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(devCompiler));
  app.get('*', (req, res) => {
    res.sendFile(path.join(path.join(__dirname, 'assets/index.html')))
  });
  app.listen(config.port, config.host, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`Listening at http://${config.host}:${config.port}`);
  });
});

/* 
 * Production tasks
 */

gulp.task('minify', () => {
  gulp.src('assets/**/*.html')
    .pipe(gulpMinifyHTML(config.minifyHTML))
    .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task("build", (callback) => {
  webpack(webpackProductionConfig, (err, stats) => {
    if (err) {
      throw(`webpack:build - ${err}`);
    }
    console.log("[webpack:build]", stats.toString({colors: true}));
    callback();
  });
});

/*
 * Common tasks
 */

gulp.task('copy-assets', () => {
  gulp.src(['assets/**']).pipe(gulp.dest(webpackConfig.output.path))
});
gulp.task('clean', (done) => {
  del(["#{webpackConfig.output.path}/*"], done);
});
gulp.task('default', ['dev-server']);
gulp.task('production', [ 'copy-assets', 'build', 'minify']);
