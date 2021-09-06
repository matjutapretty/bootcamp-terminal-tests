let assert = require("assert");
let countRegNumber = require("../function/countRegNumber");

describe('The countRegNumber function', function(){
    
    it('Should return the number of registration numbers in the string' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('Should return the number of registration numbers in the string' , function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });

});