let assert = require("assert");
var totalPhoneBill = require('../totalPhoneBill');

describe('this test shows totalPhoneBill for the data provided', function(){
    it('returns the total price for data R7.45,totalPhoneBill("call, sms, call, sms, sms")', function(){
    assert.equal("R7.45",totalPhoneBill("call, sms, call, sms, sms"))
    });
    it('returns the total price for data R7.45,totalPhoneBill("call, sms,")', function(){
       assert.equal("R3.40",totalPhoneBill("call,sms"))
    
        });
        it('returns the total price for data Ro.65,totalPhoneBill("sms")', function(){
           assert.equal("R0.65",totalPhoneBill("sms"))
            });
});