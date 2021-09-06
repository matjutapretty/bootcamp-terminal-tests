let assert = require("assert");
let fromWhere = require("../function/fromWhere");

describe('The fromWhere function', function(){
    
    it('Should return that the car is Bellville ' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('Should return that the car is Paarl ' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('Should return that the car is Cape Town ' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('Should return that the car is Some other place! ' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
    
});