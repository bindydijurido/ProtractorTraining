const workflow = require('Methods/actions');

describe('Register user', function () {
    it('with properly data', function () {

        workflow.goToUserRegistration();
        workflow.registerWittProperUserWithData(true, "test@wp.pl", "start123", "start123");

        if (workflow.registerWittProperUserWithData(true)) {
            expect(element.(by.className('alert alert-success')).getText())
                .toBe('Rejestracja przebiegła pomyślnie. Możesz teraz zalogować się na stronie');
        } else {
            expect(element.(by.className('alert alert-danger')).getText())
                .toBe('Rejestracja wymaga akceptacji regulaminu.');
        }
    })
}

