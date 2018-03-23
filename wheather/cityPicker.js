
module.exports = {
    bialystok: function() {
        return browser.findElement(By.xpath("//*[@id=\"miasta\"]/ul/li[1]/a"));
    }
}