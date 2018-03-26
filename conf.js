

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
        // 'browserName': 'firefox'
    },

    // specs: ['simpleTest.js', 'weatherServiceTest.js'],
    specs: ['weatherServiceTest.js'],

    jasmineNodeOpts: {
        showColors: true
    }
};