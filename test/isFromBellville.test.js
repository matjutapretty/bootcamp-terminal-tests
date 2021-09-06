//var isFromBellville = require('../isFromBellville');
let assert = require("assert");
let isFromBellville = require("../function/isFromBellville");

describe('The isFromBellville function', function(){
    
    it('Should return "True" if the registration number is for Belleville' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
it('Should return "False" if the registration number is not for Bellville' , function(){
    assert.equal(isFromBellville('CJ 123'), false);
});

});