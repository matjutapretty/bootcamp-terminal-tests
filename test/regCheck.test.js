let assert = require("assert");
let regCheck = require("../function/regCheck");

describe('The regCheck function', function(){
    
    it('Should return "True" for this registration number RG 45 HN GP' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('Should return "False" for this registration number ND 123-456' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('Should return "True" for this registration number LKG 679 EC', function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('Should return "False" for this registration number CY 678-453' , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('Should return "True" for this registration number GHT 456 MP', function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it('Should return "False" for this registration number CY 678-453' , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('Should return "True" for this registration number FGT 491 L', function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it('Should return "False" for this registration number CA 1234-123', function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
    
    });