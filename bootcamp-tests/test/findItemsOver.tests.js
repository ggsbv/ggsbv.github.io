var testList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var expectedResult = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

describe('The findItemsOver function', function(){

  it('Should output a list of objects with a qty greater than value of 2nd arg', function(){
    assert.deepEqual(expectedResult, findItemsOver20(testList, 25));
  });

});
