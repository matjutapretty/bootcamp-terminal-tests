let assert = require("assert");
let yearsAgo = require("../function/yearsAgo");

describe('The yearsAgo function', function(){
    
    it('Should return how many years ago that year is from the current' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('Should return how many years ago that year is from the current' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});