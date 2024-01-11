"use strict";

const tip_amount_el = document.querySelector(".tip-amount span");
const total_amount_el = document.querySelector(".total-amount span");
const bill_el = document.getElementById("bill");
const tip_percent_el = document.querySelector("#tip-percent span");
const person_count_el = document.getElementById("person-count");
const tip_plus_btn = document.getElementById("plus1");
const tip_minus_btn = document.getElementById("minus1");
const person_plus_btn = document.getElementById("plus2");
const person_minus_btn = document.getElementById("minus2");

let tip_percent = 0;
let person_count = 1;
const bill = 300;
let tip_amount = 0;
let total_amount = 0;

bill_el.textContent = bill;
total_amount = bill;
total_amount_el.textContent = bill;

tip_plus_btn.addEventListener("click", () => {
  if (tip_percent < 100) {
    tip_percent++;
    tip_percent_el.textContent = tip_percent;

    tip_amount = (bill * tip_percent) / 100;
    tip_amount_el.textContent = tip_amount;

    total_amount = bill + tip_amount;
    total_amount_el.textContent = total_amount;
  }
});

tip_minus_btn.addEventListener("click", () => {
  if (tip_percent >= 1 && tip_percent <= 100) {
    tip_percent--;
    tip_percent_el.textContent = tip_percent;

    tip_amount = (bill * tip_percent) / 100;
    tip_amount_el.textContent = tip_amount;

    total_amount = total_amount - tip_amount;

    if(tip_amount === 0){
        total_amount = bill
    }
    total_amount_el.textContent = total_amount;
  }
});

person_plus_btn.addEventListener("click", () => {
  person_count++;
  person_count_el.textContent = person_count;

  tip_amount = tip_amount / person_count;
  tip_amount_el.textContent = tip_amount;
  
  total_amount = total_amount / person_count
  if(total_amount% Math.trunc(total_amount) < 1){
    total_amount_el.textContent = total_amount;
    total_amount_el.textContent = total_amount_el.textContent.substring(0, 5)
  }
  else{
    total_amount_el.textContent = total_amount;
  }
  total_amount = total_amount * person_count
});

person_minus_btn.addEventListener("click", () => {
  if (person_count > 1) {
    person_count--;
    person_count_el.textContent = person_count;

    tip_amount = tip_amount * (person_count + 1);
    tip_amount_el.textContent = tip_amount;

    total_amount = total_amount / person_count
    if(total_amount% Math.trunc(total_amount) < 1){
      total_amount_el.textContent = total_amount;
      total_amount_el.textContent = total_amount_el.textContent.substring(0, 5)
    }
    else{
      total_amount_el.textContent = total_amount;
    }
    total_amount = total_amount * person_count
  }
});



