const form = document.getElementById('regNumForm');
const input = form.querySelector('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const oRegNum = input.value;
  input.value = "";
  if(oRegNum !== ""){
    const ul = document.getElementById('oRegNums');
    const li = document.createElement('li');
    li.textContent = oRegNum;
    ul.appendChild(li);
  }
});
