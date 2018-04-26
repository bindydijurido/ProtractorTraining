const action = require('../Methods/actions');
const pageEl = require('../Methods/pageElement');

describe('Login Page', function () {
    it('with wrong login and psswd', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();

        action.fillLoginForm('test@mail.com', 'start1234');

        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Niepoprawny e-mail lub hasło');
    })
})

describe('Login Page', function () {
    it('with incomplete login and psswd', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();

        action.fillLoginForm('test@mail', 'start123');

        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Wpisz poprawnie adres e-mail');
    })
})

describe('Login Page', function () {
    it('with proper login and psswd', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();

        action.fillLoginForm('test@gmail.com', 'start123');

        expect(element(pageEl.alertSuccess()).getText()).toBe('Gratulacje! Zostałeś poprawnie zalogowany do swojego konta.');
    })
})