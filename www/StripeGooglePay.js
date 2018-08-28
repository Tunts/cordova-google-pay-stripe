function StripeGooglePay() {
}

StripeGooglePay.prototype.isAvailable = function () {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'StripeGooglePay', 'isAvailable', []);
    });
};

StripeGooglePay.prototype.setKey = function (key) {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'StripeGooglePay', 'setKey', [key]);
    });
};

StripeGooglePay.prototype.pay = function (amount, currency) {
    return new Promise(function (resolve, reject) {
        cordova.exec(resolve, reject, 'StripeGooglePay', 'pay', [amount, currency]);
    });
};

StripeGooglePay.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins.stripeGooglePay = new StripeGooglePay();
    return window.plugins.stripeGooglePay;
};

cordova.addConstructor(StripeGooglePay.install);