let assert = require("assert");
var isFromBellville = require('../isFromBellville');

describe('this test should check if regno isFromBellville' , function(){
    it('should return true if isFromBellville, ("CY") ' , function(){
    assert.equal(true,isFromBellville("CY"))
    });
    it('should return false if isFromBellville("Ci")' , function(){
        assert.equal(false,isFromBellville("Ci"))
    });
});