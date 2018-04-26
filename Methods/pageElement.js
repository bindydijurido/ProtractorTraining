module.exports = {


    loginBttn: function() {
    return by.className('menuBtn menuIconBg r15 notifyBox avatarIcon')},

    alertDangerMssg: function () {
    return by.className('alert alert-danger')
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

    loginSubmit: function () {
    return by.className('btn btnLogin btnFullWidth')
    },
}