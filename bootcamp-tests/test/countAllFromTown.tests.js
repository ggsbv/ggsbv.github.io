describe('The countAllFromTown function', function(){

  it('should return 3', function(){
    assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));
  });

  it('should return 1', function(){
    assert.equal(1, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ'))
  });
});
