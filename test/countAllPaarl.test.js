let assert = require("assert");
let countAllPaarl = require("../function/countAllPaarl");

describe('The countAllPaarl function', function(){
    
    it('Should return "3" ' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('Should return "2" ' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

});