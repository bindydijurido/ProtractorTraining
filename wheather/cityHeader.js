

module.exports = {
    warsaw: function() {
        return browser.findElement(By.xpath("//*[@id=\"pogoda\"]/h3"));
    },

    bialystok: function() {
        return browser.findElement(By.xpath("//*[@id=\"pogoda\"]/h3"));
    },

    gdansk: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[4]/a"));
    },

    kolobrzeg: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[7]/a"));
    },

    koszalin: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[10]/a"));
    },

    lodz: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[13]/a"));
    },

    opole: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[16]/a"));
    },

    rzeszow: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[19]/a"));
    },

    szczecin: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[22]/a"));
    },

    zakopane: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[28]/a"));
    },

    bydgoszcz: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[2]/a"));
    },

    gorzow: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[5]/a"));
    },

    katowice: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[8]/a"));
    },

    krakow: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[11]/a"));
    },

    lomza: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[14]/a"));
    },

    poznan: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[17]/a"));
    },

    slupsk: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[20]/a"));
    },

    tarnow: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[23]/a"));
    },

    wloclawek: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[26]/a"));
    },

    zamosc: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[29]/a"));
    },

    czestochowa: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[3]/a"));
    },

    grudziac: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[6]/a"));
    },

    kielce: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[9]/a"));
    },

    lublin: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[12]/a"));
    },

    olsztyn: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[15]/a"));
    }
}