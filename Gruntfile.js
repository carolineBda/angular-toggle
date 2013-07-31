module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            'unit': {
                configFile: 'test/karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test-unit', ['karma:unit']);

};