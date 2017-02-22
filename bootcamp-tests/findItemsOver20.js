function findItemsOver20(list){
	var itemsOver20 = []; //create empty list
  	for(var i = 0; i < list.length; i++){
    	var currentItem = list[i]; //define current entry in the map
      	var currentQ = currentItem.qty;
      	if(currentQ > 20){	//if the price of the current entry is > 20
        	itemsOver20.push(currentItem); //add the entry to the list "itemsOver20"
        }
    }
  	return itemsOver20;	//return the itemsOver20 list
}
