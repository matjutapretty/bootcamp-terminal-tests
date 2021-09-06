let assert = require("assert");
let isWeekday = require("../function/isWeekday");

describe('The isWeekday function', function(){
    
    it('Should return "False" if it is not a weekday' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it('Should return "True" if it is a weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
    });

});