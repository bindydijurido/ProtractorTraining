const workflow = require('Methods/actions');

describe('Register user', function () {
    it('with properly data', function () {

        workflow.goToUserRegistration();
        workflow.registerWittProperUserWithData("test@wp.pl", "start123", "start123");

        expect(element.(by.className('alert alert-success')).getText())
            .toBe('Rejestracja przebiegła pomyślnie. Możesz teraz zalogować się na stronie');
    })
}

