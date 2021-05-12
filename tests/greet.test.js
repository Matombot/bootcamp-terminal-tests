let assert = require("assert");
var greet = require('../greet');

describe('The greet function', function(){

    it('should greet Tshifhiwa correctly', function(){
        assert.equal('Hello, Tshifhiwa', greet('Tshifhiwa'));
    });
});