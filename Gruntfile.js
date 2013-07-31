module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            'unit': {
                configFile: 'test/karma.conf.js'
            }
        },
        uglify: {

        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('test-unit', ['karma:unit']);

};