"use strict";
const container = document.querySelector(".container");
const thanks = document.querySelector(".thank-you");
const mainSubmit = document.getElementById("submit");
const thankSubmit = document.getElementById("rate-again");
const rating = document.getElementById("rates");
const buttons = document.querySelectorAll(".btn");

mainSubmit.addEventListener("click", function () {
  thanks.classList.remove("hidden");
  container.classList.add("hidden");
});

thankSubmit.addEventListener("click", function () {
  thanks.classList.add("hidden");
  container.classList.remove("hidden");
});

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // console.log(btn.innerHTML);
    rating.innerHTML = btn.innerHTML;
  });
});
