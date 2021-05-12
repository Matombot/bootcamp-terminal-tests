let assert = require("assert");
var fromWhere = require('../fromWhere');

describe('this test takes a car registration number as a parameter and returns the town the car is from', function(){
    it('returns from Someother place!,("CL")', function(){
   assert.equal("Some other place!",fromWhere("CL"))
    });
    it('returns the town Bellville ,("CY")', function(){
        assert.equal("Bellville",fromWhere("CY"))
        });
        it('returns the town Paarl,("CJ")', function(){
            assert.equal("Paarl",fromWhere("CJ"))
            });
            it('returns the town Cape Town,("CA")', function(){
                assert.equal("Bellville",fromWhere("CY"))
               assert.equal("Cape Town",fromWhere("CA"))
                }); 
});