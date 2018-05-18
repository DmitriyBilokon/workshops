const {defineSupportCode} = require ('cucumber');
const { client } = require('nightwatch-cucumber');

defineSupportCode(function ({Given, When, Then}) {

    Given(/^Open superslot site$/, function () {
        return client.url('http://slotmachinescript.com/')
    });

    Given(/^Increase bet$/, function () {
        return client.click('#betSpinUp')
    });

    When(/^Play one round$/, function () {
        return client.click('#spinButton')
    });

    Then(/^Wait until spin button will be enable$/, function () {
        return client.waitForElementNotPresent('.disabled', 20000)
    });



});


