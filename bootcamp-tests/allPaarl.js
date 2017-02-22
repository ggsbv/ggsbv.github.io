function allPaarl(regNums){
	var list = regNums.split(',');
  	var paarlRegs = [];

  	for(var i = 0; i < list.length; i++){
      	var current = list[i].trim(' ');
    	if(current.startsWith('CJ')){
          	paarlRegs.push(current);
        }
    }
  	return paarlRegs;
}
