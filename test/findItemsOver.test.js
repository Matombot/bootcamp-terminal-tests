let assert = require("assert");
var findItemsOver = require('../findItemsOver');

describe('this test finditemsover and provide the items', function () {
    it('returns item[ {name : "pears", qty : 37},{name : "bananas", qty : 27},{"name":"apples","qty":40}],("20")', function () {
        assert.deepEqual([], findItemsOver([{ "name": "bananas", "qty": 27 }, { "name": "apples", "qty": 3 }]))
    });
    it('returns item[ {name : "pears", qty : 37},{name : "bananas", qty : 27},{"name":"apples","qty":40}],("25")', function () {
        assert.deepEqual([], findItemsOver([{ "name": "apples", "qty": 10 }, { "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 27 }, { "name": "apples", "qty": 3 }]))
    });
    it('returns item[ {name : "pears", qty : 37},{"name":"apples","qty":40}],("30")', function () {
        assert.deepEqual([], findItemsOver([{ "name": "apples", "qty": 10 }, { "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 27 }, { "name": "apples", "qty": 3 }]))
    });
});