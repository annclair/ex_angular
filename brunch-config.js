'use strict'
exports.config = {
    paths: {
        watched: ['src'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                // 'js/vendor.min.js': /^node_modules/,
                'js/app.min.js': /^src\/js/
            },
            order: {
                before: [
                    // 'node_modules/angular/*.js',
                    // 'src/libs/**.min.js',
                    'src/js/app.js',
                    'src/js/**/*.md.js',
                    'src/js/components/**/*.js'
                ]
            }
        }
        // ,
        // stylesheets: {
        //     joinTo: {
        //         'css/vendor.min.css': [],
        //         'css/app.min.css': /^public\/scss/
        //     }
        // }
    },
    npm: {
        // enabled: false
        enabled: true,
        compilers: ['angular', 'angular-ui-router']
    },
    conventions: {
        assets: /static[\\/]/
        // ,
        // ignored: ['src/**/*.min.js']
    },
    modules: {
        wrapper: false,
        definition: false
    },
    plugins: {
        autoReload: {
            enabled: {
                css: 'on',
                js: 'on',
                json: 'on'
            }
        }
        // ,
        // babel: {
        //     ignore: [
        //         /^(node_modules)/
        //     ]
        // }
    },
    overrides: {
        production: {
            sourceMaps: false,
            plugins: {
                autoReload: {
                    enabled: false
                }
            }
        }
    },
    server: {
        path: 'node server.js',
        port: 8008,
        run: true
    }
}
