function countAllFromTown(str, regNum){
	var list = str.split(',');
  	var count = 0;
  	for(var i = 0; i < list.length; i++){
    	var current = list[i].trim(' ');
      	if(current.startsWith(regNum)){
           	count++;
        }
    }
  	return count;
}
