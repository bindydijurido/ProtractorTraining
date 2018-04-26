module.exports = {

    openPage: function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');    },

    goToSeachBar: function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('menuBtn menuIconBg searchIcon r5')).click();
    },

    searchWordInSearcBar: function (word) {
        element(by.className('searchInput')).sendKeys(word);
        element(by.className('searchButton')).click();
    },

    fillLoginForm: function (loginName, psswdForm,) {
        element(by.id('inputEmail')).sendKeys(loginName);
        element(by.id('inputPassword')).sendKeys(psswdForm);
        element(by.className('btn btnLogin btnFullWidth')).click();
    },

    goToReportTopic: function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl/');
        element(by.className('btnAlert24 catColor')).click();
    },

    reportTopicProperData: function () {
        element(by.id('inputEmail')).sendKeys('jan.kowalski@gmail.com');
        element(by.id('inputPassword')).sendKeys('Jan Kowalski');
        element(by.id('inputPassword2')).sendKeys('Test'); // i love random id's titles ^^
        element(by.className('form-control')).sendKeys('Test');
    },

    goToUserRegistration: function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('menuBtn menuIconBg r15 notifyBox avatarIcon')).click();
        element(by.title('Logowanie')).click();
    },

    registerWittProperUserWithData: function (bool, mail, password, passwordAgain) {

        if (bool == true) {
            element(by.className('email')).sendKeys(mail);
            element(by.className('password')).sendKeys(password);
            element(by.className('password2')).sendKeys(passwordAgain);
            element(by.className('accept')).click();
            element(by.className('register')).click();
        } else {
            element(by.className('email')).sendKeys(mail);
            element(by.className('password')).sendKeys(password);
            element(by.className('password2')).sendKeys(passwordAgain);
            element(by.className('accept')).click();
        }
    }
}