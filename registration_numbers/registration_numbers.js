// Select the elements
const iRegNum = document.querySelector("#iRegNum");
const oRegNum = document.querySelector("#oRegNum");
const submitButton = document.querySelector("#submitButton");

// When submit button click event fires, display the iRegNum
submitButton.addEventListener("click", function(event){
  oRegNum.innerHTML = iRegNum.value;
});
