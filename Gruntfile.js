'use strict';
var LIVERELOAD_PORT = 35729;
var livereloadMiddleware = require('./node_modules/connect-livereload/index.js')({
    port: LIVERELOAD_PORT
});

var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
    var ariaConfiguration = {
        root: 'playground'
    };

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        ariaTemplate: ariaConfiguration,
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        watch: {
            options: {
                livereload: LIVERELOAD_PORT
            },
            // gruntfile: {
            //     files: '<%= jshint.gruntfile.src %>',
            //     tasks: ['jshint:gruntfile']
            // },
            // lib_test: {
            //     files: '<%= jshint.libTest.src %>',
            //     tasks: ['jshint:libTest', 'qunit']
            // },
            livereload: {
                files: ['<%= ariaTemplate.root%>/**/*.js', './**/*.html', '<%= ariaTemplate.root %>/**/*.tpl']
            }

        },
        connect: {
            options: {
                port: 3000,
                hostname: 'localhost'
            },
            dev: {
                options: {
                    middleware: function(connect) {
                        return [
                            livereloadMiddleware,
                            mountFolder(connect, __dirname),
                            mountFolder(connect, ariaConfiguration.root)
                        ];
                    }
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    // Default task.
    grunt.registerTask('default', ['jshint', 'qunit']);
    grunt.registerTask('server', [
            'connect:dev',
            'open',
            'watch:livereload'
    ]);
};