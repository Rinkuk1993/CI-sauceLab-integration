// jasmine.getEnv().defaultTimeoutInterval = 100000;
describe('Learnyst page', function() {
   it('testing signup page', function () {
       browser.url('https://www.google.co.in/');
       browser.setValue('#lst-ib', 'webdriver');
       browser.click('.lsb');
       // browser.timeouts('implicit',1000);
       browser.click('=Selenium WebDriver');
       // browser.saveScreenshot('screenshot.png');
    });
   });