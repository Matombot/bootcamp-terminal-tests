let assert = require("assert");
var findItemsOver20 = require('../findItemsOver20');

describe('this test find items over 20 and provide the items', function(){
         it('returns item[ {name : "pears", qty : 37},{name : "bananas", qty : 27},{"name":"apples","qty":40}],("20")', function () {
            assert.deepEqual([{name: 'bananas',qty: 27 }], findItemsOver20([{ "name": "bananas", "qty": 27 }, { "name": "apples", "qty": 3 }]))
        });

});