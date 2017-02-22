describe('The countAllFromTown function', function(){

  it('Total of phone bill should be "R7.45"', function(){
    assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
  });

  it('Total of phone bill should be "R6.15"', function(){
    assert.equal('R6.15', totalPhoneBill('call, call, sms'))
  });
});
