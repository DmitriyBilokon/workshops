const chromedriver = require ('chromedriver');
const seleniumServer = require ('selenium-server');

require ('nightwatch-cucumber')({

});

module.exports = {
    gameLoadTimeout: 60000,
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        port: 4444,
        selenium: {
            cli_args: {
                'webdriver.chrome.driver': chromedriver.path
            }
        }
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost:8080',
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            desiredCapabilities: {
                browserName: 'chrome',
                "chromeOptions" : {
                }
            }
        }
    }
};

