const workflow = require('Methods/actions');

describe('Report Topic', function () {
    it('with empty values', function () {

        workflow.goToReportTopic();
        element(by.className('btn btnLogin btnFullWidth')).click();

        expect(element(by.className('alert alert-danger')).getText()).toBe('Wszystkie dane są obowiązkowe');
    });
});

describe('Report Topic', function () {
    it('with properly data', function () {

        workflow.goToReportTopic();
        workflow.reportTopicProperData();

        expect(element(browser.findElement.By.xpath('//*[@id="page"]/div[1]/div/div/div/div[2]')).getText())
            .toBe('Wiadomość została wysłana do redakcji');
    })
})