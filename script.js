// Created by TheVoidNexus on 31.01.2024 | Updated: 07.02.2024

let savedMoney = "savedMoney";
let savedUpgrade = "savedUpgrade";
let savedUpgrade2 = "savedUpgrade2"
let savedMPS = "savedMPS";
let savedMPC = "savedMPC"

function redirect() {
  window.location.href = "https://thevoidnexus.github.io/database/";
}

function redirect2() {
  window.location.href = "https://thevoidnexus.github.io/calculator/";
}

let money = parseInt(localStorage.getItem(savedMoney)) || 0;
let upgradeMoney = parseInt(localStorage.getItem(savedUpgrade)) || 10;
let MPS = parseInt(localStorage.getItem(savedMPS)) || 0;
let MPC = parseInt(localStorage.getItem(savedMPC)) || 1;

function update() {
  let Info = document.getElementById(`Info`);
  let Button1 = document.getElementById(`Button1`)
  let Button2 = document.getElementById(`Button2`)
  let Button3 = document.getElementById(`Button3`)
  Info.innerHTML = `You currently have $${money}. Money per second: $${MPS}`;
  Button1.innerHTML = `Earn Money<br>Money per click: $${MPC}`
  Button2.innerHTML = `Upgrade Money per Second<br>Cost: $${upgradeMoney}`
  Button3.innerHTML = `Upgrade Money per Click<br>Cost: $${upgradeMoney2}`
}

function clicker() {
  money += MPC;
  update();
  localStorage.setItem(savedMoney, money);
}

function clickerUpgrade() {
  if (money >= upgradeMoney) {
    money -= upgradeMoney;
    if(MPS != 0) {MPS *= 2} else {MPS += 1};
    upgradeMoney *= 2.25;
    upgradeMoney = Math.round(upgradeMoney);
    money = Math.round(money);
  }
}

function clickerUpgrade2() {
  if(money >= upgradeMoney2) {
    money -= upgradeMoney2;
    MPC *= 2;
    upgradeMoney2 *= 2.25;
    upgradeMoney2 = Math.round(upgradeMoney2);
    money = Math.round(money);
  }
}

setInterval(function () {
  money += MPS;
  update();
  localStorage.setItem(savedMoney, money);
  localStorage.setItem(savedMPS, MPS);
  localStorage.setItem(savedMPC, MPC);
  localStorage.setItem(savedUpgrade, upgradeMoney);
  localStorage.setItem(savedUpgrade2, upgradeMoney2);
}, 1000);