let assert = require("assert");
var countAllPaarl = require('../countAllPaarl');

describe('this test should count all the registrations from paarl.' , function(){
    it('returns the number of registration numbers that contain CJ in the string for Paarl,1' , function(){
    assert.equal(1,countAllPaarl("CY 123 456,CL 876 895,CK 456 765,CA 345 673,CJ 123,CL 876"))

    });
    it('returns the number of registration numbers that contain CJ in the string for Paarl,3' , function(){
        assert.equal(3,countAllPaarl("CY 123 456,CJ 876 895,CK 456 765,CA 345 673,CJ 123,CJ 876"))
    
        });
        it('returns the number of registration numbers that contain CJ in the string for Paarl,0' , function(){
    
            assert.equal(0,countAllPaarl("CY 123 456,CL 876 895,CK 456 765,CA 345 673,CK 123,CL 876"))
        
            });

});