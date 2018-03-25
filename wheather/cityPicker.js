
module.exports = {
    bialystok: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[1]/a"));
    },

    gdansk: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[4]/a"));
    },

    kolobrzeg: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[7]/a"));
    },

    koszalin: function () {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[10]/a"));
    },
}
