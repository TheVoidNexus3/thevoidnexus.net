// Created by TheVoidNexus on 31.01.2024 | Updated: 12.02.2024
const savedMoney = "savedMoney";
const savedUpgrade = "savedUpgrade";
const savedUpgrade2 = "savedUpgrade2";
const savedMPS = "savedMPS";
const savedMPC = "savedMPC";
const savedClicks = "savedClicks";

let jsonString = localStorage.getItem(`Saved`);
let save = JSON.parse(jsonString);

let money = +save.money || 0;
let upgradeMoney = +save.upgradeMoney || 10;
let upgradeMoney2 = +save.upgradeMoney2 || 10;
let MPS = +save.MPS || 0;
let MPC = +save.MPC || 1;
let totalClicks = +save.totalClicks || 0;
let roundedMoney;
let moneySuffix = "";
let roundedMoney2;
let moneySuffix2 = "";
let roundedMoney3;
let moneySuffix3 = "";


setInterval(function() {
  money += MPS;
  update();
  save.money = money;
  save.upgradeMoney = upgradeMoney;
  save.upgradeMoney2 = upgradeMoney2;
  save.MPS = MPS;
  save.MPC = MPC;
  save.totalClicks = totalClicks;
  
	jsonString = JSON.stringify(save);
	localStorage.setItem(`Saved`, jsonString);
}, 1000);



function moneyRounder(thisMoney) {
  let suffix = "";
  let roundedMoney = thisMoney;

  if (thisMoney >= 1000) {
    if (thisMoney < 1000000) {
      roundedMoney = (thisMoney / 1000).toFixed(2);
      suffix = "K";
    }
  }

  if (thisMoney >= 1000000) {
    if (thisMoney < 1000000000) {
      roundedMoney = (thisMoney / 1000000).toFixed(2);
      suffix = "M";
    }
  }

  if (thisMoney >= 1000000000) {
    if (thisMoney < 1000000000000) {
      roundedMoney = (thisMoney / 1000000000).toFixed(2);
      suffix = "B";
    }
  }

  if (thisMoney >= 1000000000000) {
    roundedMoney = (thisMoney / 1000000000000).toFixed(2);
    suffix = "T";
  }

  return {
    amount: roundedMoney,
    suffix: suffix
  };
}

function update() {
  let formattedMoney = moneyRounder(money);
  let formattedUpgradeMoney = moneyRounder(upgradeMoney);
  let formattedUpgradeMoney2 = moneyRounder(upgradeMoney2);

  let Info = document.getElementById(`Info`);
  let Button1 = document.getElementById(`Button1`);
  let Button2 = document.getElementById(`Button2`);
  let Button3 = document.getElementById(`Button3`);

  Info.innerHTML = `Balance: $${formattedMoney.amount}${formattedMoney.suffix}<br>Per second: $${MPS}<br>Per click: $${MPC}`;
  Button1.innerHTML = `Earn Money<br>Total clicks: ${totalClicks}`;
  Button2.innerHTML = `Money per Second<br>Cost: $${formattedUpgradeMoney.amount}${formattedUpgradeMoney.suffix}`;
  Button3.innerHTML = `Money per Click<br>Cost: $${formattedUpgradeMoney2.amount}${formattedUpgradeMoney2.suffix}`;
}

function clicker() {
  money += MPC;
  totalClicks += 1;
  update();
}

function clickerUpgrade() {
  if (money >= upgradeMoney) {
    money -= upgradeMoney;
    if (MPS != 0) {
      MPS *= 1.5;
    } else {
      MPS += 1;
    }
    MPS = Math.round(MPS);
    upgradeMoney *= 1.5;
    upgradeMoney = Math.round(upgradeMoney);
    MPS = Math.round(MPS);
    update();
  }
}

function clickerUpgrade2() {
  if (money >= upgradeMoney2) {
    money -= upgradeMoney2;
    MPC *= 1.5;
    upgradeMoney2 *= 1.5;
    upgradeMoney2 = Math.round(upgradeMoney2);
    MPC = Math.round(MPC);
    update();
  }
}

function gameReset() {
  if (confirm("Do you really want to reset your progress?")) {
    money = 0;
    MPS = 0;
    MPC = 1;
    upgradeMoney = 10;
    upgradeMoney2 = 10;
    totalClicks = 0;
    alert("Your progress has been reset.");
  } else {
    alert("You cancelled the reset.");
  }
}

function redirect() {
  window.location.href = "https://thevoidnexus.github.io/database/";
}

function redirect2() {
  window.location.href = "https://thevoidnexus.github.io/calculator/";
}
