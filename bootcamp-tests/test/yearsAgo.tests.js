describe("yearsAgo function", function(){
  it("should return 10", function(){
    assert.equal(10, yearsAgo(2007));
  });

  it("should return 7", function(){
    assert.equal(7, yearsAgo(2010));
  });
});
