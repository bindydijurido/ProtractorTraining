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

    fillRegisterForm: function(loginName, psswdForm, psswdForm2) {
        element(pageEl.mailForm()).sendKeys(loginName);
        element(pageEl.psswdForm()).sendKeys(psswdForm);
        element(pageEl.psswdForm2()).sendKeys(psswdForm2);
        element(pageEl.registrationCheckBox()).click();
        element(pageEl.loginSubmit()).click();
    },

    generateRandomMail: function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + "@gmail.com";
    }
}