describe("isWeekday function", function(){
  it("should return true", function(){
    assert.equal(true, isWeekday("Monday"));
  });

  it("should return false", function(){
    assert.equal(false, isWeekday("Sunday"));
  });
});
