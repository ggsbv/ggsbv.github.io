function totalPhoneBill(str){
	var list = str.split(',');
  	var total = 0;
  	for(var i = 0; i < list.length; i++){
      var current = list[i].trim(' ');
    	switch(current){
          	case 'call':
            total += 2.75
            break;
          	case 'sms':
            total += 0.65;
            break;
          	default:
            total += 0;
      }
    }
  	total = total.toFixed(2);
	var s = 'R' + total;
  return s;
}
