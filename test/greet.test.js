//var greet = require('../greet');
let assert = require("assert");
let greet = require("../function/greet");

describe('The greet function' , function(){
    
    it('Should return "Hello, Uhuru" when I greet Uhuru' , function(){
        
        assert.equal('Hello, Uhuru', greet('Uhuru'));
        
    });

    it('Should return "Hello, Bokang" when I greet Bokang' , function(){
        
        assert.equal('Hello, Bokang', greet('Bokang'));
        
    });

    it('Should return "Hello" when no name is entered' , function(){
        
        assert.equal('Hello', greet());
        
    });


});