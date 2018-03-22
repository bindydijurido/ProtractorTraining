
function getElementByClass(className) {
    return element(by.className(className));
}

exports.getAlertElement = function () {

    // return element(by.className('btn btnLogin btnFullWidth'));
    return getElementByClass('btn btnLogin btnFullWidth')
}