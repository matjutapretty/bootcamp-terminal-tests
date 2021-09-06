let assert = require("assert");
let transportFee = require("../function/transportFee");

describe('The transportFee function' , function(){
    
    it('Should return "R20" when you working morning shift ' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('Should return "R10" when you working afternoon shift ' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('Should return "free" when you working nightshift ' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

});