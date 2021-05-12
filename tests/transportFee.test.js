let assert = require("assert");
var transportFee = require('../transportFee');
describe('this test should show how much is a transport fee per shift.' , function(){
    it('returns the price for each shift "free" ,transportFee("night")' , function(){
   assert.equal("free",transportFee("night"))

    });
    it('returns the price for each shift "R20" ,transportFee("morning")' , function(){
        assert.equal("R20",transportFee("morning"))
    
        });
        it('returns the price for each shift "afternoon" ,transportFee("R10")' , function(){
            assert.equal("R10",transportFee("afternoon"))
            });
});