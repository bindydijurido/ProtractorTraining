const cityHeader = require('./wheather/cityHeader');
const cityPicker = require('./wheather/cityPicker');

describe('Wheather', function() {
    it('has switching correctly - Warszawa', function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');

        element(by.className('hideMin')).click();
        expect(cityHeader.warsaw().getText()).toBe('Wybrana lokalizacja: Warszawa');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Bialystok', function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://niezalezna.pl');

        element(by.className('hideMin')).click();

        cityPicker.bialystok().click();
        expect(cityHeader.bialystok().getText()).toBe('Wybrana lokalizacja: Białystok');
    })
})
