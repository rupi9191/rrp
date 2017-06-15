'use strict';

var envify = require('loose-envify/custom');

module.exports = function(grunt) {
    // autoload grunt task dependencies
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // list of files for external
    var getFiles = function(boolColon) {
        var files = [
            '<%= files.babelPolyfill %>',
            '<%= files.history %>',
            '<%= files.react %>',
            '<%= files.reactBootstrap %>',
            '<%= files.reactConfirm %>',
            '<%= files.reactDom %>',
            '<%= files.reactRouter %>',
            '<%= files.reactRouterBootstrap %>',
            '<%= files.redux %>',
            '<%= files.reactRedux %>',
            '<%= files.reactReduxi18n %>',
            '<%= files.reactInform %>',
            '<%= files.reactSAlert %>'
        ];

        if (!boolColon) {
            return files;
        }

        return files.join(':||').split('||');
    };
    
    // grunt task configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // base directory
        baseDir: 'client',

        // file options
        files: {
            // js
            entry: '<%= baseDir %>/index.js',
            appSrc: '<%= baseDir %>/dist/js/built/app.js',
            appMin: '<%= baseDir %>/dist/js/app.min.js',
            vendorSrc: '<%= baseDir %>/dist/js/built/vendor.js',
            vendorMin: '<%= baseDir %>/dist/js/vendor.min.js',

            // css
            screenLess: '<%= baseDir %>/assets/less/screen.less',
            screenCssSrc: '<%= baseDir %>/dist/css/screen.css',
            screenCssMin: '<%= baseDir %>/dist/css/screen.min.css',

            // react redux relevant alias to map
            // NOTE: update the alias for those dependencies to be moved to vendor bundle

            babelPolyfill: 'babel-polyfill',
            history: 'history',
            react: 'react',
            reactBootstrap: 'react-bootstrap',
            reactConfirm: 'react-confirm',
            reactDom: 'react-dom',
            reactRouter: 'react-router',
            reactRouterBootstrap: 'react-router-bootstrap',
            redux: 'redux',
            reactRedux: 'react-redux',
            reactReduxi18n: 'react-redux-i18n',
            reactInform: 'react-inform',
            reactSAlert: 'react-s-alert',

            alias: getFiles(true),
            list: getFiles()
        },

        // module bundling by using browserify with ract and es6 transform
        browserify: {
            // bundling vendor lib source file
            vendor: {
                src: ['./node_modules'],
                dest: '<%= files.vendorSrc %>',
                options: {
                    alias: '<%= files.alias %>'
                },
                external: null
            },

            // bundling for development
            dev: {
                files: { '<%= files.appSrc %>': ['<%= files.entry %>'] },
                options: {
                    watch: true,
                    keepLive: true,
                    transform: [
                        [envify({ _: 'purge', NODE_ENV: 'development' })],
                        ['babelify'],
                        ['require-globify']
                    ],
                    plugin: [
                        ['livereactload']
                    ],
                    external: '<%= files.list %>'
                }
            },

            // bundling for production
            prod: {
                files: { '<%= files.appSrc %>': ['<%= files.entry %>'] },
                options: {
                    transform: [
                        [envify({ _: 'purge', NODE_ENV: 'production' })],
                        ['babelify'],
                        ['require-globify']
                    ],
                    external: '<%= files.list %>'
                }
            }
        },

        // uglify vendor and app files
        uglify: {
            vendor: {
                files: {
                    '<%= files.vendorMin %>': '<%= files.vendorSrc %>'
                }
            },
            app: {
                options: {
                    sourceMap: true
                },
                files: {
                    '<%= files.appMin %>': '<%= files.appSrc %>'
                }
            }
        },

        // compiling less file
        less: {
            screen: {
                options: {
                    sourceMap: true
                },
                src: '<%= files.screenLess %>',
                dest: '<%= files.screenCssSrc %>'
            }
        },

        // minifying compiled css
        cssmin: {
            options: {
                sourceMap: true,
                advanced: false
            },
            minify: {
                src: '<%= files.screenCssSrc %>',
                dest: '<%= files.screenCssMin %>'
            }
        },

        // copy font icons
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                cwd: 'node_modules',
                src: [
                    'bootstrap/fonts/*.*',
                    'font-awesome/fonts/*.*'
                ],
                dest: '<%= baseDir %>/dist/fonts'
            }
        },

        // cach busting for assets
        'cache-busting': {
            vendorjs: {
                replace: ['<%= baseDir %>/index.jsp'],
                replacement: 'vendor.min.js',
                file: '<%= baseDir %>/dist/js/vendor.min.js',
                cleanup: true
            },
            appjs: {
                replace: ['<%= baseDir %>/index.jsp'],
                replacement: 'app.min.js',
                file: '<%= baseDir %>/dist/js/app.min.js',
                cleanup: true
            },
            css: {
                replace: ['<%= baseDir %>/index.jsp'],
                replacement: 'screen.min.css',
                file: '<%= baseDir %>/dist/css/screen.min.css',
                cleanup: true
            }
        },

        // connect for local development
        connect: {
            server: {
                options: {
                    protocol: 'http',
                    port: 8000,
                    hostname: '0.0.0.0',
                    base: '.',
                    open: true
                }
            }
        },

        // watch respective specific tasks
        watch: {
            css: {
                files: ['<%= baseDir %>/assets/less/*.less'],
                tasks: ['less', 'cssmin']
            },
            js: {
                files: ['<%= files.appSrc %>'],
                tasks: ['uglify:app']
            }
        }
    });

    // register the respective tasks for `development` context
    grunt.registerTask('dev', [
        'browserify:vendor',
        'browserify:dev',
        'uglify',
        'copy',
        'less',
        'cssmin',
        'connect',
        'watch'
    ]);

    // register the respective tasks for `production` context
    grunt.registerTask('prod', [
        'browserify:vendor',
        'browserify:prod',
        'uglify',
        'copy',
        'less',
        'cssmin',
        'cache-busting'
    ]);

    // register the `default` to map `production` context
    grunt.registerTask('default', 'build production', function() {
        grunt.task.run('prod');
    });
};
