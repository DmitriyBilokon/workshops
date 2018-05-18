require('chromedriver');

var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();

waitForElement = function (locator) {
    var condition = seleniumWebdriver.until.elementLocated({xpath: locator});
    return driver.wait(condition)
};

defineSupportCode(function ({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});
