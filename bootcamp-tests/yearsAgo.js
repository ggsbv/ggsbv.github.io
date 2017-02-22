function yearsAgo(year){
  var currentDate = new Date();
	var currentYear = currentDate.getFullYear();
  var yearsDiff = currentYear - year;
  return yearsDiff;
}
