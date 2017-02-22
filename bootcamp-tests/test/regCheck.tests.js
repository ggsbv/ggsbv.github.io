describe('regCheck function', function(){

  it('should return true if reg number ends with "GP"', function(){
    assert.equal(true, regCheck('888 GP','GP'));
  });

  it('should return false if reg number does not end with "L"', function(){
    assert.equal(false, regCheck('888 GP', 'L'));
  });
});
