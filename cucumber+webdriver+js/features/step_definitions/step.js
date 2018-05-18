var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {

    Given(/^Open superslot site$/, function () {
        return driver.get('http://slotmachinescript.com/')
    });

    When(/^Play one round$/, function () {
            return driver.findElement({xpath: "//*[@id='spinButton']"}).click();
    });

    Then(/^Wait until spin button will be enable$/, function () {
        var xpath = "//*[@class='']";
        return waitForElement(xpath);
    });

});

