
describe('Test my countAllPaarl function' , function(){
    it("it should return '2' when called with 'CY 123,CJ 132,CJ 768' " , function(){
        assert.equal(isFromBellville('CY 123,CJ 132,CJ 768'), 2);
    });

    it("it should return '1' when called with 'CJ 123,CY 456' " , function(){
        assert.equal(isFromBellville('CJ 123,CY 456'), 1);    });

        

});