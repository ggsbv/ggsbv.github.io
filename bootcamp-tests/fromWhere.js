function fromWhere(regNum){
  	var place = null;
	if(regNum.startsWith('CY')){
      place = 'Bellville';
    }
  	else if(regNum.startsWith('CJ')){
    	place = 'Paarl';
    }
  	else if(regNum.startsWith('CA')){
    	place = 'Cape Town';
    }
  	else{
    	place = 'Some other place!'
    }
  	return place;
}
