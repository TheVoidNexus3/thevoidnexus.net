// Created by TheVoidNexus on 31.01.2024 | Updated: 07.02.2024

let savedMoney = "savedMoney";
let savedUpgrade = "savedUpgrade";
let savedMPS = "savedMPS";

function redirect() {
  window.location.href = "https://thevoidnexus.github.io/database/";
}

function redirect2() {
  window.location.href = "https://thevoidnexus.github.io/calculator/";
}

let money = parseInt(localStorage.getItem(savedMoney)) || 0;
let upgradeMoney = parseInt(localStorage.getItem(savedUpgrade)) || 10;
let MPS = parseInt(localStorage.getItem(savedMPS)) || 0;

function update() {
  let Info = document.getElementById(`Info`);
  Info.innerHTML = `You currently have $${money}.`;
}

function clicker() {
  money += MPS;
  update();
  localStorage.setItem(savedMoney, money);
}

function clickerUpgrade() {
  if (money >= upgradeMoney) {
    money -= upgradeMoney;
    MPS *= 2;
    upgradeMoney *= 1.5;

    localStorage.setItem(savedMoney, money);
    localStorage.setItem(savedUpgrade, upgradeMoney);
    localStorage.setItem(savedMPS, MPS);

    alert(`Successfully upgraded! Money per second: $${MPS}`);
  }
}

setInterval(function () {
  money += MPS;
  update();
  localStorage.setItem(savedMoney, money);
}, 1000);