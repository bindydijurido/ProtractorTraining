const cityHeader = require('./wheather/cityHeader');
const cityPicker = require('./wheather/cityPicker');
const actions = require('./wheather/actions');

describe('Wheather', function() {
    it('has switching correctly - Warszawa', function() {

        actions.goToWheather();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Warszawa');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Bialystok', function() {

        actions.goToWheather();
        cityPicker.bialystok().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Białystok');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Gdansk', function() {

        actions.goToWheather();
        cityPicker.gdansk().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Gdańsk');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Kolobrzeg', function() {

        actions.goToWheather();
        cityPicker.kolobrzeg().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Kołobrzeg');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Koszalin', function() {

        actions.goToWheather();
        cityPicker.koszalin().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Koszalin');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Lodz', function() {

        actions.goToWheather();
        cityPicker.lodz().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Łódź');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Opole', function() {

        actions.goToWheather();
        cityPicker.opole().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Opole');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Rzeszow', function() {

        actions.goToWheather();
        cityPicker.rzeszow().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Rzeszów');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Szczecin', function() {

        actions.goToWheather();
        cityPicker.szczecin().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Szczecin');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Zakopane', function() {

        actions.goToWheather();
        cityPicker.zakopane().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Zakopane');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Bydgoszcz', function() {

        actions.goToWheather();
        cityPicker.bydgoszcz().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Bydgoszcz');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Gorzow Wlkp', function() {

        actions.goToWheather();
        cityPicker.rzeszow().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Gorzów Wielkopolski');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Katowice', function() {

        actions.goToWheather();
        cityPicker.katowice().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Katowice');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Krakow', function() {

        actions.goToWheather();
        cityPicker.krakow().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Kraków');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Lomza', function() {

        actions.goToWheather();
        cityPicker.lomza().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Łomża');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Poznan', function() {

        actions.goToWheather();
        cityPicker.poznan().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Poznań');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Slupsk', function() {

        actions.goToWheather();
        cityPicker.slupsk().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Słupsk');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Tarnow', function() {

        actions.goToWheather();
        cityPicker.tarnow().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Tarnów');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Wloclawek', function() {

        actions.goToWheather();
        cityPicker.wloclawek().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Włocławek');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Zamosc', function() {

        actions.goToWheather();
        cityPicker.zamosc().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Zamość');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Czestochowa', function() {

        actions.goToWheather();
        cityPicker.czestochowa().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Częstochowa');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Grudziac', function() {

        actions.goToWheather();
        cityPicker.grudziac().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Grudziądz');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Kielce', function() {

        actions.goToWheather();
        cityPicker.kielce().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Kielce');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Lublin', function() {

        actions.goToWheather();
        cityPicker.lublin().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Lublin');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Olsztyn', function() {

        actions.goToWheather();
        cityPicker.olsztyn().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Olsztyn');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Radom', function() {

        actions.goToWheather();
        cityPicker.radom().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Radom');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Suwalki', function() {

        actions.goToWheather();
        cityPicker.suwalki().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Suwałki');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Torun', function() {

        actions.goToWheather();
        cityPicker.torun().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Toruń');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Wroclaw', function() {

        actions.goToWheather();
        cityPicker.wroclaw().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Wrocław');
    })
})

describe('Wheather', function() {
    it('has switching correctly - Zielona Gora', function() {

        actions.goToWheather();
        cityPicker.zielonaGora().click();
        expect(cityHeader.getHeader().getText()).toBe('Wybrana lokalizacja: Zielona Góra');
    })
})