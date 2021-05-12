let assert = require("assert");
var regCheck = require('../regCheck');

describe('this test should check if a registration number is for GP, L, EC, MP registration plates' , function(){
    it('should return false, isBellville("CY 189-012","CY")' , function(){
    assert.equal(false,regCheck("CY 189-012", "CY"))
    });
    it('should return true, isGP("DV 23 NB GP","GP")' , function(){
        assert.equal(true,regCheck("DV 23 NB GP","GP"))
        });
        it('should return false, isDurban("CY 189-012","ND")' , function(){
            assert.equal(false,regCheck("CY 189-012", "ND"))
            });
            it('should return false, isMP("DV 23 LP GP","MP")' , function(){
                assert.equal(false,regCheck("DV 23 LP GP","MP"))
                }); 
});