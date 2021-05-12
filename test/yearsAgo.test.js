let assert = require("assert");
var yearsAgo = require('../yearsAgo');

describe('this test should takes in a year and calculate how many years ago that year is from the current year.' , function(){
    it('returns the number of years ago 20, yearsAgo("2001")' , function(){
    assert.equal(20,yearsAgo("2001"))
    });
    it('returns the number of years ago 3, yearsAgo("2018")' , function(){
        assert.equal(3,yearsAgo("2018"))
        });
        it('returns the number of years ago 5, yearsAgo("2016")' , function(){
            assert.equal(5,yearsAgo("2016"))

            });
            it('returns the number of years ago 0, yearsAgo("2021")' , function(){
                assert.equal(0,yearsAgo("2021"))
            
                }); 
});