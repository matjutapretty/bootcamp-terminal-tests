let assert = require("assert");
let totalPhoneBill = require("../function/totalPhoneBill");

describe('The totalPhoneBill function', function(){
    
    it('Should return "R7.45" per call, per sms, per call, per sms, per sms' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('Should return "R3.40" per call, per sms' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('Should return "R1.30" per sms, per sms' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});