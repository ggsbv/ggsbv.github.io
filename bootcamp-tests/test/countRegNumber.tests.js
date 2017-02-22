describe("countRegNumber function", function(){
  it("should return 3", function(){
    assert.equal(3, countRegNumber('CA 333,CF 444,CF 999'));
  });

  it("should return 4", function(){
    assert.equal(4, countRegNumber('CA 333,CF 444, CF 999, 444 NA'));
  });
});
