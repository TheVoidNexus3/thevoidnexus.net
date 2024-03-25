// Created by TheVoidNexus on 31.01.2024 | Updated: 25.03.2024

const MILLISECONDS_PER_SECOND = 1000;
const UPDATE_INTERVAL = 1000;

setInterval(function() {
  money += MPS;
  playtimeSeconds++;
  if (playtimeSeconds === 60) {
    playtimeSeconds = 0;
    playtimeMinutes++;
  }
  if (playtimeMinutes === 60) {
    playtimeMinutes = 0;
    playtimeHours++;
  }
  update();
}, UPDATE_INTERVAL);

window.onbeforeunload = function() {
  save.money = money;
  save.upgradeMoney = upgradeMoney;
  save.upgradeMoney2 = upgradeMoney2;
  save.MPS = MPS;
  save.MPC = MPC;
  save.totalClicks = totalClicks;
  save.seconds = playtimeSeconds;
  save.minutes = playtimeMinutes;
  save.hours = playtimeHours;
  const jsonString = JSON.stringify(save);
  localStorage.setItem(`Saved`, jsonString);
  return null;
};

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
  requestAnimationFrame(function() {
    const formattedMoney = moneyRounder(money);
    const formattedUpgradeMoney = moneyRounder(upgradeMoney);
    const formattedUpgradeMoney2 = moneyRounder(upgradeMoney2);
    const formattedMPS = moneyRounder(MPS);
    const formattedMPC = moneyRounder(MPC);

    setTimeout(function() {
      const Info = document.getElementById(`Info`);
      const Button1 = document.getElementById(`Button1`);
      const Button2 = document.getElementById(`Button2`);
      const Button3 = document.getElementById(`Button3`);
      const playtime = document.getElementById(`playtime`);
  
      Info.innerHTML = `Balance: $${formattedMoney.amount}${formattedMoney.suffix}<br>Per second: $${formattedMPS.amount}${formattedMPS.suffix}<br>Per click: $${formattedMPC.amount}${formattedMPC.suffix}`;
      Button1.innerHTML = `Earn Money<br>Total clicks: ${totalClicks}`;
      Button2.innerHTML = `Money per Second<br>Cost: $${formattedUpgradeMoney.amount}${formattedUpgradeMoney.suffix}`;
      Button3.innerHTML = `Money per Click<br>Cost: $${formattedUpgradeMoney2.amount}${formattedUpgradeMoney2.suffix}`;
  
      const hoursIndex = playtimeHours < 10 ? "0" : "";
      const minutesIndex = playtimeMinutes < 10 ? "0" : "";
      const secondsIndex = playtimeSeconds < 10 ? "0" : "";
      const playtimeLog = `Playtime: ${hoursIndex}${playtimeHours}h ${minutesIndex}${playtimeMinutes}m ${secondsIndex}${playtimeSeconds}s`;
      playtime.innerHTML = playtimeLog;
    }, 100)
  });
}

function clicker() {
  money += MPC;
  totalClicks += 1;
  update();
}

function clickerUpgrade() {
  if (money >= upgradeMoney) {
    money -= upgradeMoney;
    if(MPS != 0) {MPS *= 1.5} else {MPS += 1}
    upgradeMoney *= 1.5;
    MPS = Math.round(MPS);
    upgradeMoney = Math.round(upgradeMoney);
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
