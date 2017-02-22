function findItemsOver(list, threshold){
	var itemsOver = [];
  	for(i = 0; i < list.length; i++){
      var currentItem = list[i];
      var currentQ = currentItem.qty;
    	if(currentQ > threshold){
    		itemsOver.push(currentItem);
      }
    }
  return itemsOver;
}
