console.log("[PRELOAD] SUCCESSFUL START");

const custom_timer = require("../script/UITimer");
const crosshair = require("../script/Crosshair");
const fixCss = require("../script/fixCss");
const settings = require("../settings/settings");
const exitButton = require("../script/exitButton");
const bulletAlert = require("../script/bulletAlert");

document.addEventListener("DOMContentLoaded", () => {
    console.log("[PRELOAD] SUCCESSFUL LOAD DOM");
    settings();
    custom_timer();
    crosshair();
    fixCss();
    exitButton();
    bulletAlert();
    console.log("[PRELOAD] SUCCESSFUL LOAD ALL SCRIPTS");
});
