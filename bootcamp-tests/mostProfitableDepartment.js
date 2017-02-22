function mostProfitableDepartment(inputList){
	var outputMap = {};
  var maxSales = 0;
  var maxDep = '';

  for(var i = 0; i < inputList.length; i++){
    var current = inputList[i]
    var currentDep = current.department;
    var currentSales = current.sales;

    if(outputMap[currentDep] === undefined){
      outputMap[currentDep] = 0;
    }

    outputMap[currentDep] += currentSales;

    for(current in outputMap){
      var currentDep = current;
      var currentSales = outputMap[currentDep];

      if(maxSales < currentSales){
        maxSales = currentSales;
        maxDep = currentDep;
      }
    }
  }
  return maxDep;
}
