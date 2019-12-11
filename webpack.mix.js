let mix = require('laravel-mix')
require('laravel-mix-alias')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .alias({
    '@': '/resources/js',
    '~': '/resources/sass',
  })
  .js('resources/js/index.js', 'public/js/app.js')
  .disableNotifications()
  .options({
    hmrOptions: {
      host: 'localhost'
    }
  })
//   .browserSync({
//     proxy: 'localhost',
//     port: 8000
//   })

if (mix.inProduction()) {
  mix.version()
}
