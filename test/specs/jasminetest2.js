var assert = require('assert');
describe('Learnyst page', function() {
    it('should have right title', function () {
        browser.url('http://learnyst.com/');
        var title = browser.getTitle();
        assert.equal(title, 'Learnyst – Sell courses on your branded apps');
    });
});