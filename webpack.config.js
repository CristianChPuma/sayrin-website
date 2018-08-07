var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/assets/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/assets')
    // will create public/build/app.js and public/build/app.css
    //.addEntry('app', './assets/js/app.js')
    //.addEntry('adminapp', './assets/js/adminapp.js')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .addEntry('main', './assets/js/main.js')
    .enableVueLoader()
    .enableSassLoader()
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    // .addEntry('js/app', './assets/js/app.js')
     .addStyleEntry('css/app', './assets/css/main.scss')

    // uncomment if you use Sass/SCSS files
    // .enableSassLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable
    // .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
