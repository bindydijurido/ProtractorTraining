

module.exports = {

    goToWheather: function() {
        return browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('hideMin')).click();
    }
}