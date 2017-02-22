describe('Is from Bellville function', function(){
  it('should return true if argument starts with "CY"', function(){
    assert.equal(true, isFromBellville('CY 666'));
  });

  it('should return false if argument does not start with "CY"', function(){
    assert.equal(false, isFromBellville('CJ 666'));
  });
});
