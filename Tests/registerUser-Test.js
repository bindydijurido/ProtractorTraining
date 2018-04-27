const action = require('../Methods/actions');
const pageEl = require('../Methods/pageElement');

describe('Register user', function () {
    it('with random generated properly data', function () {

        action.openPage();

        element(pageEl.loginBttn()).click();
        element(pageEl.registerBttn()).click();

        action.fillRegisterForm(action.generateRandomMail(), 'start123', 'start123');

        browser.wait(protractor.ExpectedConditions.presenceOf(element(pageEl.alertSuccess())), 5000, 'Element taking too long to appear');
        expect(element(pageEl.alertSuccess()).getText()).toBe('Rejestracja przebiegła pomyślnie. Możesz teraz zalogować się na stronie');
    })
})

