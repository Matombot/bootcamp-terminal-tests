let assert = require("assert");
var countRegNumber = require('../countRegNumber');

describe('this test should count the reg no and display the number' , function(){
    it('returns the number of registration numbers 3' , function(){
    assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"))

    });
    it('returns the number of registration numbers 4' , function(){
        assert.equal(4,countRegNumber("CA 182736,CY 523519,CJ 812328,CJ 890328"))
    
        });
        it('returns the number of registration numbers 5,' , function(){
            assert.equal(5,countRegNumber("CA 182736,CY 523519,CJ 812328,CJ 812328,CJ 34768"))
        });
});