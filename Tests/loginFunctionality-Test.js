const action = require('../Methods/actions');
const pageEl = require('../Methods/pageElement');

describe('Login functionality', function () {
    it('with wrong login and psswd', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();
        action.fillLoginForm('test@mail.com', 'start1234');

        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Niepoprawny e-mail lub hasło');
    })
})

describe('Login functionality', function () {
    it('with incomplete login and psswd', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();
        action.fillLoginForm('test@mail', 'start123');

        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Wpisz poprawnie adres e-mail');
    })
})

describe('Login functionality', function () {
    it('with proper login and empty psswd field', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();
        element(pageEl.loginSubmit()).click();

        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Wpisz poprawnie adres e-mail');
    })
})

describe('Login functionality', function () {
    it('with empty login and empty psswd', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();
        element(pageEl.loginSubmit()).click();

        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Wpisz poprawnie adres e-mail');
    })
})

describe('Login functionality', function () {
    it('with proper login and psswd', function () {

        browser.ignoreSynchronization = true;

        action.openPage();
        element(pageEl.loginBttn()).click();
        action.fillLoginForm('test@gmail.com', 'start123');

        browser.wait(protractor.ExpectedConditions.presenceOf(element(pageEl.alertSuccess())), 5000, 'Element taking too long to appear');
        expect(element(pageEl.alertSuccess()).getText()).toBe('Gratulacje! Zostałeś poprawnie zalogowany do swojego konta.');
    })
})