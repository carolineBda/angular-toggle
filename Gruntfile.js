module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        },
        uglify: {
            'angular-toggle': {
                src: ['directives/angular-toggle.js'],
                dest: 'directives/angular-toggle.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('test-unit', ['karma:unit']);

};