// var whatever = require('whatever.js')
// import whatever from 'whatever.js'


describe('Login Page', function() {
    it('has wrong login&psswd', function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl/');

        element(by.className('menuBtn menuIconBg r15 notifyBox avatarIcon')).click();
        element(by.id('inputEmail')).sendKeys('mail@mail.com');
        element(by.id('inputPassword')).sendKeys('12345');

        element(by.className('btn btnLogin btnFullWidth')).click();
        // whatever.getAlertElement().click();
        expect(element(by.className('alert alert-danger')).getText()).toBe('Niepoprawny e-mail lub hasło');
    });
});

describe('Topic post', function () {
    it('has empy values', function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl/');

        element(by.className('btnAlert24 catColor')).click();
        element(by.className('btn btnLogin btnFullWidth')).click();

        expect(element(by.className('alert alert-danger')).getText()).toBe('Wszystkie dane są obowiązkowe');
    });
});