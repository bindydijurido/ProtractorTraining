module.exports = {
    getHeader: function () {
        return browser.findElement(By.xpath("//*[@id=\"pogoda\"]/h3"));
    },
}