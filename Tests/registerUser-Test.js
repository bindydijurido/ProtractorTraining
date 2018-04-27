const action = require('../Methods/actions');
const pageEl = require('../Methods/pageElement');

describe('Register user', function () {
    it('with random generated properly data', function () {

        action.openPage();
        element(pageEl.loginBttn()).click();
        element(pageEl.registerBttn()).click();
        action.fillRegisterForm(action.generateRandomMail(), 'start123', 'start123', true);

        browser.wait(protractor.ExpectedConditions.presenceOf(element(pageEl.alertSuccess())), 5000, 'Element taking too long to appear');
        expect(element(pageEl.alertSuccess()).getText()).toBe('Rejestracja przebiegła pomyślnie. Możesz teraz zalogować się na stronie');
    })
})

describe('Register user', function() {
    it('with login and wrong 2nd psswd', function() {

        action.openPage();
        element(pageEl.loginBttn()).click();
        element(pageEl.registerBttn()).click();
        action.fillRegisterForm(action.generateRandomMail(), 'start123', 'start321', true);

        browser.wait(protractor.ExpectedConditions.presenceOf(element(pageEl.alertDangerMssg())), 5000, 'Element taking too long to appear');
        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Podane hasła są różne. Spróbuj ponownie.');
    })
})

describe('Register user', function() {
    it('with repetitive login', function() {

        action.openPage();
        element(pageEl.loginBttn()).click();
        element(pageEl.registerBttn()).click();
        action.fillRegisterForm('test@gmail.com', 'start123', 'start123', true);

        browser.wait(protractor.ExpectedConditions.presenceOf(element(pageEl.alertDangerMssg())), 5000, 'Element taking too long to appear');
        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Rejestracja nie powiodła się lub użytkownik już istnieje');
    })
})

describe('Register user', function () {
    it('with unchecked checkbox', function() {

        action.openPage();
        element(pageEl.loginBttn()).click();
        element(pageEl.registerBttn()).click();
        action.fillRegisterForm(action.generateRandomMail(), 'start123', 'start123', false);

        browser.wait(protractor.ExpectedConditions.presenceOf(element(pageEl.alertDangerMssg())), 5000, 'Element taking too long to appear');
        expect(element(pageEl.alertDangerMssg()).getText()).toBe('Rejestracja wymaga akceptacji regulaminu.');
    })
})