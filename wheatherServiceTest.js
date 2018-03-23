

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

        browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[1]/a")).click();

        // browser.findElement(By.id('pogoda'))
        // findElement(By.xpath("ul/li[1]/a")).getText()
        // findElementByID("pogoda").getHeaderText();
        // finSelectedCity()

        expect(browser.findElement(By.xpath("//*[@id=\"pogoda\"]/h3")).getText()).toBe('Wybrana lokalizacja: Białystok');
    })
})




