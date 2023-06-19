const inputMoney = document.querySelector(".input");
const procent = document.querySelectorAll(".buttons");
const inputCustom = document.querySelector(".inputCustom");
const inputPeople = document.querySelector(".inputPeople");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const reset = document.querySelector(".reset");
let billInput;
let procentOfBill = 0;
let customInput;
let numberOfPeople;

inputMoney.addEventListener("input", function (e) {
  billInput = parseFloat(inputMoney.value);
});

procent.forEach((button) => {
  button.addEventListener("click", function () {
    procentOfBill = parseFloat(button.textContent.slice(0, -1));
  });
});

inputCustom.addEventListener("input", function () {
  customInput = parseFloat(inputCustom.value);
  console.log(customInput);
  if (customInput != NaN) {
    procentOfBill = customInput;
  }
});

inputPeople.addEventListener("input", function () {
  numberOfPeople = parseFloat(inputPeople.value);
  calculator();
});

reset.addEventListener("click", function () {
  inputMoney.value = "";
  inputCustom.value = "";
  inputPeople.value = "";
  billInput = 0;
  procentOfBill = 0;
  customInput = 0;
  numberOfPeople = 1;
  calculator();
});

function calculator() {
  const tipAmount = (
    ((billInput / 100) * procentOfBill) /
    numberOfPeople
  ).toFixed(2);
  result1.innerHTML = tipAmount;
  const total =
    (billInput + (billInput / 100) * procentOfBill) / numberOfPeople;
  result2.innerHTML = total.toFixed(2);
  // console.log(total);
  // console.log(typeof tipAmount);
  console.log(typeof billInput);
  console.log(typeof procentOfBill);
  console.log(typeof numberOfPeople);
}
