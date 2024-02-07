// Created by TheVoidNexus on 31.01.2024 | Updated: 07.02.2024

function redirect() {
  window.location.href = "https://thevoidnexus.github.io/database/";
}
function redirect2() {
  window.location.href = "https://thevoidnexus.github.io/calculator/";
}

//

let money = localStorage.getItem(savedMoney);
if(money == null) {money = 0};
let upgradeMoney = localStorage.getItem(savedUpgrade);
if(upgradeMoney == null) {upgradeMoney = 10};
let MPS = localStorage.getItem(savedMPS);
if(MPS == null) {MPS = 0}

function update() {
  let Info = document.getElementById(`Info`)
  Info.innerHTML = `You currently have $${money}.`
}

function clicker() {
money += MPS;
update();
localStorage.setItem(savedMoney, money);
}

function clickerUpgrade() {
  if(money >= upgradeMoney) {
    money -= upgradeMoney;
    MPS *= 2;
    upgradeMoney *= 1.5;

    localStorage.setItem(savedMoney, money);
    localStorage.setItem(savedUpgrade, upgradeMoney);
    localStorage.setItem(savedMPS, MPS);

    alert(`Successfully upgraded! Money per second: $${MPS}`);
  }
}

setInterval(function() {
  money += MPS;
}, 1000);
