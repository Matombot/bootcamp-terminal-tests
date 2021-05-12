let assert = require("assert");
var isWeekday = require('../isWeekday');
describe('this test should  check if a day passed is weekday' , function(){
    it('should return false, isWeekDay("Sunday")' , function(){
    assert.equal(false,isWeekday("Sunday"))
    });
        it('should return false, isWeekDay("Sarturday")' , function(){
           assert.equal(false,isWeekday("Sarturday"))
            });
            it('should return true, isWeekDay("Monday")' , function(){
                assert.equal(true,isWeekday("Monday"))
                
                });
});