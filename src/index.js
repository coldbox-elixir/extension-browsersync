import Elixir from 'coldbox-elixir';

let _;
let browserSync;

/*
 |----------------------------------------------------------------
 | BrowserSync
 |----------------------------------------------------------------
 |
 | Browsersync makes your browser testing workflow faster by
 | synchronizing URLs, behavior, and code changes across
 | across multiple devices. And, now it's in Elixir!
 |
 */

Elixir.extend('browserSync', function (options) {
    loadPlugins();

    // Browsersync will only run during `gulp watch`.
    if (Elixir.isWatching()) {
        browserSync.init(getOptions(options));
    }

    new Elixir.Task('browserSync', function () {
        if (Elixir.isWatching()) {
            this.recordStep('Starting Browsersync');
        }
    }).watch();
});


/**
 * Load the required Gulp plugins on demand.
 */
function loadPlugins() {
    _ = require('underscore');
    browserSync = require('browser-sync').create();
};


/**
 * Get all Browsersync options.
 *
 * @param  {object|null} options
 * @return {object}
 */
function getOptions(options) {
    let config = Elixir.config;

    return _.extend({
        files: [
            config.appPaths.config + '/**/*.cfc',
            config.appPaths.config + '/**/*.cfm',
            config.appPaths.handlers + '/**/*.cfc',
            config.appPaths.handlers + '/**/*.cfm',
            config.appPaths.interceptors + '/**/*.cfc',
            config.appPaths.interceptors + '/**/*.cfm',
            config.appPaths.models + '/**/*.cfc',
            config.appPaths.models + '/**/*.cfm',
            config.appPaths.modules + '/**/*.cfc',
            config.appPaths.modules + '/**/*.cfm',
            config.appPaths.modules_app + '/**/*.cfc',
            config.appPaths.modules_app + '/**/*.cfm',
            config.appPaths.tests + '/**/*.cfc',
            config.appPaths.tests + '/**/*.cfm',
            config.viewPaths.views + '/**/*.cfm',
            config.viewPaths.layouts + '/**/*.cfm',
            config.get( 'public.css.outputFolder' ) + '/**/*.css',
            config.get( 'public.js.outputFolder' ) + '/**/*.js',
            config.get( 'public.versioning.buildFolder' ) + '/rev-manifest.json'
        ],

        watchOptions: {
            usePolling: true
        },

        snippetOptions: {
            rule: {
                match: /(<\/body>|<\/pre>)/i,
                fn: (snippet, match) => snippet + match
            }
        }
    }, config.browserSync, options);
}
