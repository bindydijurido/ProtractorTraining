

module.exports = {

    goToWeather: function() {
        return browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('hideMin')).click();
    },

    goToLogin: function() {
        return browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('menuBtn menuIconBg r15 notifyBox avatarIcon')).click();
    },

    wrongPsswd: function() {
        return element(by.id('inputEmail')).sendKeys('mail@mail.com');
        element(by.id('inputPassword')).sendKeys('12345');

        element(by.className('btn btnLogin btnFullWidth')).click();
    },

    goToReportTopic: function() {
        return
        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl/');

        element(by.className('btnAlert24 catColor')).click();
    }
}