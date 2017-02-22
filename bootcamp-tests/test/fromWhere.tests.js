describe('The fromWhere function', function(){

  it('Should return Bellville', function(){
    assert.equal('Bellville', fromWhere('CY007'));
  });

  it('Should return with "Some other place!"', function(){
    assert.equal('Some other place!', fromWhere('Nowhere'))
  });
});
