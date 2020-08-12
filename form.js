const number = document.getElementById("number");
const pin = document.getElementById("pin-code");
const submitBtn = document.getElementById("submit-Btn");

let checkingNumber = parseInt(number);
let badColor = "#FF9B37";
let goodColor = "#FFFFFF";

function SubmitClick() {
  if (number.value.length != 10) {
    number.style.backgroundColor = badColor;
    alert("Mobile number should be of 10 digits");
  } else 
  number.style.backgroundColor = goodColor;
  return true;
}

submitBtn.addEventListener("click", SubmitClick);
