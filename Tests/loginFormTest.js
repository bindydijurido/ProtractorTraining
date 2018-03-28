const workflow = require('Methods/actions');

describe('Login Page', function () {
    it('with wrong login&psswd', function () {

        workflow.goToLogin();
        workflow.wrongPsswd();

        expect(element(by.className('alert alert-danger')).getText())
            .toBe('Niepoprawny e-mail lub hasło');
    });
});