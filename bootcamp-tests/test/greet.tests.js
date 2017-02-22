describe('The greet function', function(){

  it('should greet Janine correctly', function(){
    assert.equal('Hello, Janine', greet('Janine'))
  });

  it('should greet Andre correctly', function(){
    assert.equal('Hello, Karen', greet('Andre'), ['greet error!'])
  });
});
