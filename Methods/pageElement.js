module.exports = {


    loginBttn: function() {
    return by.className('menuBtn menuIconBg r15 notifyBox avatarIcon')},

    alertDangerMssg: function () {
    return by.className('alert alert-danger')
    },

    registerBttn: function () {
    return By.xpath('/html/body/div[2]/div[3]/div[1]/div/div/div[1]/div/div[1]/a')
    },

    registrationCheckBox: function() {
    return By.xpath('/html/body/div[2]/div[3]/div[1]/div/div/div/form/div[4]/div/label')
    },

    alertSuccess: function() {
    return by.className('alert alert-success')
    },

    mailForm: function () {
    return by.id('inputEmail')
    },

    psswdForm: function () {
    return by.id('inputPassword')
    },

    psswdForm2: function () {
    return by.id('inputPassword2')
    },

    loginSubmit: function () {
    return by.className('btn btnLogin btnFullWidth')
    },
}