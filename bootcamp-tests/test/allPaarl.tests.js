describe('All from Paarl function', function(){

  it('should return array [CJ 008, CJ 006]', function(){
    assert.deepEqual(['CJ 008', 'CJ 006'], allPaarl('CJ 008, CK 005, CJ 006'));
  });

  it('should return array [CJ 008, CJ 006, CJ 444]', function(){
    assert.deepEqual(['CJ 008', 'CJ 006', 'CJ 444'], allPaarl('CJ 008, CK 005, CJ 006, CJ 444, VP 666'));
  });
});
