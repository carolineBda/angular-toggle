basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'js/angular-toggle.js',
    'test/angular-toggle.spec.js'
];

exclude = [
    'app/lib/angular/angular.min.js',
    'app/lib/angular/angular-scenario.js'
];

autoWatch = true;
singleRun = true;

browsers = ['PhantomJS'];

reporters = ['dots', 'junit'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
