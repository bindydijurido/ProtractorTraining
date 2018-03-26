exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
    },

    specs: ['Tests/weatherServiceTest.js'],
    specs: ['Tests/reportTopicTest.js'],
    specs: ['Tests/loginFormTest.js'],

    jasmineNodeOpts: {
        showColors: true
    }
};