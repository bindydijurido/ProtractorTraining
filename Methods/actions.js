const pageEl = require('../Methods/pageElement');

module.exports = {

    openPage: function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
    },

    fillLoginForm: function (loginName, psswdForm,) {
        element(pageEl.mailForm()).sendKeys(loginName);
        element(pageEl.psswdForm()).sendKeys(psswdForm);
        element(pageEl.loginSubmit()).click();
    },
}