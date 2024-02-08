// Created by TheVoidNexus on 31.01.2024 | Updated: 08.02.2024

const savedMoney = "savedMoney";
const savedUpgrade = "savedUpgrade";
const savedUpgrade2 = "savedUpgrade2"
const savedMPS = "savedMPS";
const savedMPC = "savedMPC"
const savedClicks = "savedClicks"

function redirect() {
  window.location.href = "https://thevoidnexus.github.io/database/";
}

function redirect2() {
  window.location.href = "https://thevoidnexus.github.io/calculator/";
}

let money = +localStorage.getItem(savedMoney) || 0;
let upgradeMoney = +localStorage.getItem(savedUpgrade) || 10;
let upgradeMoney2 = +localStorage.getItem(savedUpgrade2) || 10;
let MPS = +localStorage.getItem(savedMPS) || 0;
let MPC = +localStorage.getItem(savedMPC) || 1;
let totalClicks = +localStorage.getItem(savedClicks) || 0;

function update() {
  let Info = document.getElementById(`Info`);
  let Button1 = document.getElementById(`Button1`)
  let Button2 = document.getElementById(`Button2`)
  let Button3 = document.getElementById(`Button3`)
  Info.innerHTML = `Balance: $${money}<br>Per second: $${MPS}<br>Per click: $${MPC}`;
  Button1.innerHTML = `Earn Money<br>Total clicks: ${totalClicks}`
  Button2.innerHTML = `Money per Second<br>Cost: $${upgradeMoney}`
  Button3.innerHTML = `Money per Click<br>Cost: $${upgradeMoney2}`
}

function clicker() {
  money += MPC;
  totalClicks += 1;
  update();
  localStorage.setItem(savedMoney, money);
}

function clickerUpgrade() {
  if (money >= upgradeMoney) {
    money -= upgradeMoney;
    if(MPS != 0) {MPS *= 1.5} else {MPS += 1};
    MPS = Math.round(MPS);
    upgradeMoney *= 2;
    upgradeMoney = Math.round(upgradeMoney);
    money = Math.round(money);
  }
}

function clickerUpgrade2() {
  if(money >= upgradeMoney2) {
    money -= upgradeMoney2;
    MPC *= 1.5;
    upgradeMoney2 *= 2;
    upgradeMoney2 = Math.round(upgradeMoney2);
    money = Math.round(money);
    MPC = Math.round(MPC);
  }
}

function gameReset() {
  let confirmation = confirm("Do you really want to reset your progress?");
  if(confirmation == true) {
  money = 0;
  MPS = 0;
  MPC = 1;
  upgradeMoney = 10;
  upgradeMoney2 = 10;
  totalClicks = 0;
  alert("Your progress has been resetted.")
  } else {
    alert("You cancelled the reset.")
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
  localStorage.setItem(savedClicks, totalClicks);
}, 1000);
