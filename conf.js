exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],

    // specs: ['Tests/weatherService-Test.js'],
    // specs: ['Tests/reportTopic-Test.js'],
    specs: ['Tests/loginForm-Test.js'],
    // specs: ['Tests/registerUser-Test.js'],
    // specs: ['searchBar-Test.js'],

    jasmineNodeOpts: {
        showColors: true
    }
};