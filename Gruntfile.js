module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dist: {
                files: {
                  'dist/perspective.js': ['src/perspective.js'],
                },
                options: {
                    browserifyOptions: {
                        'standalone': 'Perspective'
                    }
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/perspective.min.js': ['dist/perspective.js']
                }
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['browserify', 'uglify']);

};
