var buttonBought = {
  orange: false,
  yellow: false
};
var clicks = 0;
var totalClicks = 0;
var AutoClickCost = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
var AutoClickBought = 0;
var AutoClickUpgVer = 1;
var AutoClickUpgCost = 100;
var RedMult = 1.00;
var OrangeMult = 1.00;
var YellowMult = 1.00;
var TotalMult = 1.00;
var redMultBotNum = 0;
var redMultBotCost = 250;
setInterval (incrementAutoClick, 1000);
setInterval (redMultBot, 5000);
function save() {
  localStorage.setItem('clicks', JSON.stringify(clicks));
  localStorage.setItem('total', JSON.stringify(totalClicks));
  localStorage.setItem('redMult', JSON.stringify(RedMult));
  localStorage.setItem('orangeMult', JSON.stringify(OrangeMult));
  localStorage.setItem('yellowMult', JSON.stringify(YellowMult));
}
function load() {
  clicks = JSON.parse(localStorage.getItem('clicks'));
  RedMult = JSON.parse(localStorage.getItem('redMult'));
  OrangeMult = JSON.parse(localStorage.getItem('orangeMult'));
  YellowMult = JSON.parse(localStorage.getItem('yellowMult'));
}
function update() {
  document.getElementById("ClickNum").innerHTML = clicks + " clicks";
  RedMult = (Math.round(RedMult * 100))/100;
  document.getElementById("RedMult").innerHTML = RedMult;
  OrangeMult = (Math.round(OrangeMult * 1000))/1000;
  document.getElementById("OrangeMult").innerHTML = OrangeMult;
  document.getElementById("YellowMult").innerHTML = YellowMult;
  TotalMult = (Math.round(((RedMult * OrangeMult * YellowMult) * 1000)))/1000;
  document.getElementById("TotalMult").innerHTML = TotalMult;
  document.getElementById("TotalClicks").innerHTML = "Total Clicks: " + totalClicks;
}
function addClicks(x) {
  clicks = clicks + x;
  totalClicks = totalClicks + x;
}
function incrementAutoClick() {
  addClicks(Math.floor(AutoClickBought * AutoClickUpgVer * TotalMult));
  update();
}
function backDoor() {
  var beforeClicks = clicks;
  console.log("Backdoor activated...");
  clicks = 1000;
  buyMultiplyButton();
  update();
  clicks = 10000;
  buyDupeButton();
  update();
  setTimeout(() => { console.log("Backdoor closed..."); }, 2000);
  setTimeout(() => { clicks = beforeClicks; }, 2000);
  setTimeout(() => { console.log("Don't tell anyone you opened this..."); }, 3000);
}
function redClick() {
  addClicks(Math.floor(1 * TotalMult));
  RedMult = RedMult + 0.01;
  update();
}
function orangeClick() {
  addClicks(Math.floor(3 * TotalMult));
  OrangeMult = OrangeMult + 0.005;
  update();
}
function yellowClick() {
  addClicks(Math.floor(5 * TotalMult));
  YellowMult = (Math.round((YellowMult + 0.001) * 1000))/1000;
  update();
}
function redMultBot () {
  RedMult = RedMult + (redMultBotNum/100);
  update();
}
function AutoClicker() {
  if (AutoClickBought > 0) {
    incrementAutoClick();
  }
}
function buyAutoClicker() {
  if (clicks >= AutoClickCost) {
    clicks = clicks - AutoClickCost;
    AutoClickCost = Math.round((AutoClickCost * 5) / 2);
    AutoClickBought++;
    document.getElementById("AutoClickCost").innerHTML = "Costs " + AutoClickCost + "c";
    document.getElementById("AutoClickBought").innerHTML = "You've bought " + AutoClickBought;
    update();
  }
}
function buyAutoClickUpg() {
  if (clicks >= AutoClickUpgCost) {
    clicks = clicks - AutoClickUpgCost;
    update();
    AutoClickUpgVer++;
    var AutoVer = AutoClickUpgVer + 1;
    AutoClickUpgCost = Math.round((AutoClickUpgCost * 7) / 4 + 12);
    document.getElementById("AutoClickUpgCost").innerHTML = "Costs " + AutoClickUpgCost + "c";
    document.getElementById("AutoClickUpgInfo").innerHTML = "Changes autoclicker speed to " + AutoVer + "/sec";
    document.getElementById("AutoClickUpg").innerHTML = "Auto Clicker Version " + AutoVer;
    document.getElementById("AutoClickInfo").innerHTML = "Clicks " + AutoClickUpgVer + " time per second/autoclicker";
  }
}
function buyMultiplyButton() {
  if (clicks >= 1000 && !buttonBought.orange) {
    clicks -= 1000;
    update();
    document.getElementById("OrangeButton").style.display = "inline-block";
    document.getElementById("MultButtonCost").innerHTML = "You've already bought this function";
    document.getElementById("MultiButton").style.background = "#E95839";
    document.getElementById("OrangeMult").style.display = "inline-block";
    document.getElementById("xOrangeBuy").style.display = "inline-block";
    buttonBought.orange = true;
  }
}
function buyDupeButton() {
  if (clicks >= 10000 && !buttonBought.yellow) {
    clicks -= 10000;
    update();
    document.getElementById("YellowButton").style.display = "inline-block";
    document.getElementById("DupeButtonCost").innerHTML = "You've already bought this function";
    document.getElementById("DupeButton").style.background = "#E95839";
    document.getElementById("YellowMult").style.display = "inline-block";
    document.getElementById("xYellowBuy").style.display = "inline-block";
    buttonBought.yellow = true;
  }
}
function buyRedMultBot() {
  if (clicks >= redMultBotCost) {
    clicks = clicks - redMultBotCost;
    redMultBotCost = redMultBotCost * 3;
    document.getElementById("RedMultBotCost").innerHTML = "Costs " + redMultBotCost + "c";
    redMultBotNum++;
    document.getElementById("RedMultBotNum").innerHTML = "You've bought " + redMultBotNum;
    update();
  }
}
function xOutMultiButton() {
  document.getElementById("MultiButton").style.display = "none";
  document.getElementById("MultButtonCost").style.display = "none";
  document.getElementById("xOrangeBuy").style.display = "none";
  document.getElementById("MultButtonUnlock").style.display = "none";
}
function xOutDupeButton() {
  document.getElementById("DupeButton").style.display = "none";
  document.getElementById("DupeButtonCost").style.display = "none";
  document.getElementById("xYellowBuy").style.display = "none";
  document.getElementById("DupeButtonUnlock").style.display = "none";
}
function optionsMenu(bool) {
  let options = document.getElementById("OptionsMenu");
  if (bool == 1) {
    options.style.display = "block";
  } else if (bool == 0) {
    options.style.display = "none";
  }
}
