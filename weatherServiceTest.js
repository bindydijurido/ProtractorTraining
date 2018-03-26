const cityHeader = require('./weatherUtility/cityHeader');
const cityPicker = require('./weatherUtility/cityPicker');
const actions = require('./actions');

describe('Weather', function() {
    it('has switching correctly - Warszawa', function() {

        actions.goToWeather();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Warszawa');
    })
})

describe('Weather', function() {
    it('has switching correctly - Bialystok', function() {

        actions.goToWeather();
        cityPicker.bialystok().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Białystok');
    })
})

describe('Weather', function() {
    it('has switching correctly - Gdansk', function() {

        actions.goToWeather();
        cityPicker.gdansk().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Gdańsk');
    })
})

describe('Weather', function() {
    it('has switching correctly - Kolobrzeg', function() {

        actions.goToWeather();
        cityPicker.kolobrzeg().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Kołobrzeg');
    })
})

describe('Weather', function() {
    it('has switching correctly - Koszalin', function() {

        actions.goToWeather();
        cityPicker.koszalin().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Koszalin');
    })
})

describe('Weather', function() {
    it('has switching correctly - Lodz', function() {

        actions.goToWeather();
        cityPicker.lodz().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Łódź');
    })
})

describe('Weather', function() {
    it('has switching correctly - Opole', function() {

        actions.goToWeather();
        cityPicker.opole().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Opole');
    })
})

describe('Weather', function() {
    it('has switching correctly - Rzeszow', function() {

        actions.goToWeather();
        cityPicker.rzeszow().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Rzeszów');
    })
})

describe('Weather', function() {
    it('has switching correctly - Szczecin', function() {

        actions.goToWeather();
        cityPicker.szczecin().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Szczecin');
    })
})

describe('Weather', function() {
    it('has switching correctly - Zakopane', function() {

        actions.goToWeather();
        cityPicker.zakopane().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Zakopane');
    })
})

describe('Weather', function() {
    it('has switching correctly - Bydgoszcz', function() {

        actions.goToWeather();
        cityPicker.bydgoszcz().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Bydgoszcz');
    })
})

describe('Weather', function() {
    it('has switching correctly - Gorzow Wlkp', function() {

        actions.goToWeather();
        cityPicker.gorzow().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Gorzów Wielkopolski');
    })
})

describe('Weather', function() {
    it('has switching correctly - Katowice', function() {

        actions.goToWeather();
        cityPicker.katowice().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Katowice');
    })
})

describe('Weather', function() {
    it('has switching correctly - Krakow', function() {

        actions.goToWeather();
        cityPicker.krakow().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Kraków');
    })
})

describe('Weather', function() {
    it('has switching correctly - Lomza', function() {

        actions.goToWeather();
        cityPicker.lomza().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Łomża');
    })
})

describe('Weather', function() {
    it('has switching correctly - Poznan', function() {

        actions.goToWeather();
        cityPicker.poznan().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Poznań');
    })
})

describe('Weather', function() {
    it('has switching correctly - Slupsk', function() {

        actions.goToWeather();
        cityPicker.slupsk().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Słupsk');
    })
})

describe('Weather', function() {
    it('has switching correctly - Tarnow', function() {

        actions.goToWeather();
        cityPicker.tarnow().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Tarnów');
    })
})

describe('Weather', function() {
    it('has switching correctly - Wloclawek', function() {

        actions.goToWeather();
        cityPicker.wloclawek().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Włocławek');
    })
})

describe('Weather', function() {
    it('has switching correctly - Zamosc', function() {

        actions.goToWeather();
        cityPicker.zamosc().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Zamość');
    })
})

describe('Weather', function() {
    it('has switching correctly - Czestochowa', function() {

        actions.goToWeather();
        cityPicker.czestochowa().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Częstochowa');
    })
})

describe('Weather', function() {
    it('has switching correctly - Grudziac', function() {

        actions.goToWeather();
        cityPicker.grudziac().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Grudziądz');
    })
})

describe('Weather', function() {
    it('has switching correctly - Kielce', function() {

        actions.goToWeather();
        cityPicker.kielce().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Kielce');
    })
})

describe('Weather', function() {
    it('has switching correctly - Lublin', function() {

        actions.goToWeather();
        cityPicker.lublin().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Lublin');
    })
})

describe('Weather', function() {
    it('has switching correctly - Olsztyn', function() {

        actions.goToWeather();
        cityPicker.olsztyn().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Olsztyn');
    })
})

describe('Weather', function() {
    it('has switching correctly - Radom', function() {

        actions.goToWeather();
        cityPicker.radom().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Radom');
    })
})

describe('Weather', function() {
    it('has switching correctly - Suwalki', function() {

        actions.goToWeather();
        cityPicker.suwalki().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Suwałki');
    })
})

describe('Weather', function() {
    it('has switching correctly - Torun', function() {

        actions.goToWeather();
        cityPicker.torun().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Toruń');
    })
})

describe('Weather', function() {
    it('has switching correctly - Wroclaw', function() {

        actions.goToWeather();
        cityPicker.wroclaw().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Wrocław');
    })
})

describe('Weather', function() {
    it('has switching correctly - Zielona Gora', function() {

        actions.goToWeather();
        cityPicker.zielonaGora().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Zielona Góra');
    })
})