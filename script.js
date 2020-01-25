var i = 0;
var clicks = 0;
var totalClicks = 0;
var AutoClickCost = 10;
var AutoClickBought = 0;
var AutoClickUpgVer = 1;
var AutoClickUpgCost = 100;
var RedMult = 1.00;
var OrangeMult = 1.00;
var TotalMult = 1.00;
var redMultBotNum = 0;
var redMultBotCost = 250;
var oneSecond = setInterval (incrementAutoClick, 1000);
var fiveSecond = setInterval (redMultBot, 5000);
function update() {
  document.getElementById("ClickNum").innerHTML = clicks + " clicks";
  RedMult = (Math.round(RedMult * 100))/100;
  document.getElementById("RedMult").innerHTML = RedMult;
  OrangeMult = (Math.round(OrangeMult * 1000))/1000;
  document.getElementById("OrangeMult").innerHTML = OrangeMult;
  TotalMult = (Math.round(((RedMult * OrangeMult) * 1000)))/1000;
  document.getElementById("TotalMult").innerHTML = TotalMult;
  document.getElementById("TotalClicks").innerHTML = "Total Clicks: " + totalClicks;
};
function addClicks(x) {
  clicks = clicks + x;
  totalClicks = totalClicks + x;
};
function incrementAutoClick() {
  addClicks(Math.floor(AutoClickBought * AutoClickUpgVer * TotalMult));
  update();
};

function redClick() {
  addClicks(Math.floor(1 * TotalMult));
  RedMult = RedMult + 0.01;
  update();
};
function orangeClick() {
  addClicks(Math.floor(3 * TotalMult));
  OrangeMult = OrangeMult + 0.001;
  update();
};
function redMultBot () {
  RedMult = RedMult + (redMultBotNum/100)
  update();
};
function AutoClicker() {
  if (AutoClickBought > 0) {
    incrementAutoClick();
  };
};
function buyAutoClicker() {
  if (clicks >= AutoClickCost) {
    clicks = clicks - AutoClickCost;
    AutoClickCost = Math.round((AutoClickCost * 5) / 2);
    AutoClickBought++;
    document.getElementById("AutoClickCost").innerHTML = "Costs " + AutoClickCost + "c";
    document.getElementById("AutoClickBought").innerHTML = "You've bought " + AutoClickBought;
    update();
  };
};
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
  };
};
function buyMultiplyButton() {
  if (clicks >= 1000 && i == 0) {
    clicks = clicks - 1000;
    update();
    document.getElementById("OrangeButton").style.display = "inline-block";
    document.getElementById("MultButtonCost").innerHTML = "You've already bought this function";
    document.getElementById("MultiButton").style.background = "#E95839";
    document.getElementById("OrangeMult").style.display = "inline-block";
    document.getElementById("exitOutMultiButton").style.display = "inline-block";
    i = 1;
  };
};
function buyRedMultBot() {
  if (clicks >= redMultBotCost) {
    clicks = clicks - redMultBotCost;
    redMultBotCost = redMultBotCost * 3;
    document.getElementById("RedMultBotCost").innerHTML = "Costs " + redMultBotCost + "c";
    redMultBotNum++;
    document.getElementById("RedMultBotNum").innerHTML = "You've bought " + redMultBotNum;
    update();
  };
};
function xOutMultiButton() {
  document.getElementById("MultiButton").style.display = "none";
  document.getElementById("MultButtonCost").style.display = "none";
  document.getElementById("exitOutMultiButton").style.display = "none";
  document.getElementById("MultButtonUnlock").style.display = "none";
};
function optionsMenu(bool) {
  let options = document.getElementById("OptionsMenu");
  if (bool == "open") {
    options.style.display = "block";
  } else if (bool == "close") {
    options.style.display = "none";
  };
};