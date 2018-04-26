const action = require('../Methods/actions');
const pageEl = require('../Methods/pageElement');

describe('Login Page', function () {
    it('with wrong login and psswd', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();

        action.fillLoginForm('test@mail.com', 'start123');

        expect(element(pageEl.alertMssg()).getText()).toBe('Niepoprawny e-mail lub hasło');
    })
})

describe('Login Page', function () {
    it('with incomplete login and wrong pssw'), function () {

        action.openPage();
        element(pageEl.loginBttn()).click();

        action.fillLoginForm('test@test', 'start123');

        expect(element(pageEl.alertMssg()).getText().toBe('Wpisz poprawnie adres e-mail'));
    }
})
