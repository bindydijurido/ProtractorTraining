const workflow = require('actions');


describe('Login Page', function() {
    it('has wrong login&psswd', function() {

        workflow.goToLogin();
        workflow.wrongPsswd();

        expect(element(by.className('alert alert-danger')).getText()).toBe('Niepoprawny e-mail lub hasło');
    });
});

describe('Report Topic', function() {
    it('has empty values', function() {

        workflow.goToReportTopic();
        element(by.className('btn btnLogin btnFullWidth')).click();

        expect(element(by.className('alert alert-danger')).getText()).toBe('Wszystkie dane są obowiązkowe');
    });
});