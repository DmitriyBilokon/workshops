var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Before, After}) {
    Before(function () {
        return driver.manage().window();
    });

    After(function () {
        return driver.quit();
    });

});