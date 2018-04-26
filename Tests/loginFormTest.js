const workflow = require('../Methods/actions');
const elements = require('../Methods/pageElements');

describe('Login Page', function () {
    it('with wrong login&psswd', function () {

        workflow.openPage();

        expect(element(elements.loginBttn()).isPresent()).toBeTruthy();
        element(elements.loginBttn()).click();

        workflow.fillLoginForm('test@mail.com', 'start123');

        expect(element(elements.alertMssg()).getText()).toBe('Niepoprawny e-mail lub hasło');
    })
})
