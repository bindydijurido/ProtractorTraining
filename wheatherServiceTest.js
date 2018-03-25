const cityHeader = require('./wheather/cityHeader');
const cityPicker = require('./wheather/cityPicker');
const actions = require('./wheather/actions');

describe('Wheather', function() {
    it('has switching correctly - Warszawa', function() {

        actions.goToWheather();
        expect(cityHeader.warsaw().getText()).toBe('Wybrana lokalizacja: Warszawa');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Bialystok', function() {

        actions.goToWheather();
        cityPicker.bialystok().click();

        expect(cityHeader.bialystok().getText()).toBe('Wybrana lokalizacja: Białystok');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Gdansk', function() {

        actions.goToWheather();
        cityPicker.gdansk().click();

        expect(cityHeader.gdansk().getText()).toBe('Wybrana lokalizacja: Gdańsk');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Kolobrzeg', function() {

        actions.goToWheather();
        cityPicker.kolobrzeg().click();

        expect(cityHeader.kolobrzeg().getText()).toBe('Wybrana lokalizacja: Kołobrzeg');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Koszalin', function() {

        actions.goToWheather();
        cityPicker.koszalin()

        expect(cityHeader.koszalin().getText()).toBe('Wybrana lokalizacja: Koszalin');
    })
})