

module.exports = {
    warsaw: function() {
        return browser.findElement(By.xpath("//*[@id=\"pogoda\"]/h3"));
    }
}