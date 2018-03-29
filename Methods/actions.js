module.exports = {

    goToWeather: function () {
        return browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('hideMin')).click();
    },

    goToLogin: function () {
        return browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('menuBtn menuIconBg r15 notifyBox avatarIcon')).click();
    },

    goToSeachBar: function () {
        return browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('menuBtn menuIconBg searchIcon r5')).click();
    },

    searchWordInSearcBar: function (word) {
        return element(by.className('searchInput')).sendKeys(word);
        element(by.className('searchButton')).click();
    },

    wrongPsswd: function () {
        return element(by.id('inputEmail')).sendKeys('mail@mail.com');
        element(by.id('inputPassword')).sendKeys('12345');
        element(by.className('btn btnLogin btnFullWidth')).click();
    },

    goToReportTopic: function () {
        return browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl/');
        element(by.className('btnAlert24 catColor')).click();
    },

    reportTopicProperData: function () {
        return element(by.id('inputEmail')).sendKeys('jan.kowalski@gmail.com');
        element(by.id('inputPassword')).sendKeys('Jan Kowalski');
        element(by.id('inputPassword2')).sendKeys('Test'); // i love random id's titles ^^
        element(by.className('form-control')).sendKeys('Test');
    },

    goToUserRegistration: function () {
        return browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');
        element(by.className('menuBtn menuIconBg r15 notifyBox avatarIcon')).click();
        element(by.title('Logowanie')).click();
    },

    registerWittProperUserWithData: function (bool, mail, password, passwordAgain) {
        return
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