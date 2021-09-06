let assert = require("assert");
let countAllFromTown = require("../function/countAllFromTown");

describe('The countAllFromTown function', function(){
    
    it('Should return the number of registration numbers fromStellies  ' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
    });

    it('Should return  the number of registration numbers fromKuilsriver  ' , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1)
    });
    
    });