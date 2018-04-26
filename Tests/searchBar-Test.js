const workflow = require('Methods/actions');

describe('Searchbar', function () {
    it('is searching properly', function () {

        workflow.goToSeachBar();
        workflow.searchWordInSearcBar("komfort");

        element(by.className('searchInfo')).getText().then(function (actualText) {
            if (actualText.indexOf('komfort') !== 1) {
                document.write("Searchbar result found searched word in: " + resultsNumber + " results");
            } else {
                document.write("Test failed");
            }
        })
    })
})