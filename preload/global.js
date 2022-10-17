const {
    contextBridge,
    ipcRenderer
} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    settingsStore: (id, value) => {
        switch (id) {
            case "CustomCrosshair":
                if (value) {
                    document.getElementById("crosshair").style.display = "block";
                } else {
                    document.getElementById("crosshair").style.display = "none";
                }
                break;

            case "CrosshairLink":
                document.getElementById("crosshair").src = value;
                break;

            case "CrosshairLeft":
                if (!value) {
                    document.getElementById("crosshair").style.left = "936px";
                } else {
                    document.getElementById("crosshair").style.left = value + "px";
                }
                break;

            case "CrosshairTop":
                if (!value) {
                    document.getElementById("crosshair").style.top = "516px";
                } else {
                    document.getElementById("crosshair").style.top = value + "px";
                }
                break;

            case "fpsOnUI":
                if (value) {
                    document.getElementById("FPSUI").style.display = "block";
                } else {
                    document.getElementById("FPSUI").style.display = "none";
                }
                break;

            case "UITimer": 
                if (value) {
                    document.getElementById("timerCustom").style.display = "block";
                } else {
                    document.getElementById("timerCustom").style.display = "none";
                }
            break;

            default:
                break;
        }
        console.log("[SWITCH] " + id + " " + value)
        ipcRenderer.send('settingsStore', id, value)
    }
})

console.log("[PRELOAD] SUCCESSFUL START");

const custom_timer = require("../script/UITimer");
const crosshair = require("../script/crosshair");
const fixCss = require("../script/fixCss");
const settings = require("../settings/settings");
const exitButton = require("../script/exitButton");
// const bulletAlert = require("../script/bulletAlert");
const update = require("./update");
const fpsOnUI = require("../script/fpsOnUI");
const css = require("../script/css");
const totalPlayers = require("../script/totalPlayers");
// const badges = require("../script/badges");
const exportImportSettings = require("../script/exportImportSettings");
const rpcDiscord = require("../script/rpcdiscord");

document.addEventListener("DOMContentLoaded", () => {
    console.log("[PRELOAD] SUCCESSFUL LOAD DOM");
    console.log("[SCRIPT] rpcDiscord")
    rpcDiscord(ipcRenderer);
    console.log("[SCRIPT] update")
    update(ipcRenderer)
    console.log("[SCRIPT] css")
    css();
    console.log("[SCRIPT] exitButton")
    exitButton();
    console.log("[SCRIPT] settings")
    settings();
    console.log("[SCRIPT] custom_timer")
    custom_timer();
    console.log("[SCRIPT] crosshair")
    crosshair();
    console.log("[SCRIPT] fixCss")
    fixCss();
    // bulletAlert();
    console.log("[SCRIPT] fpsOnUI")
    fpsOnUI();
    console.log("[SCRIPT] totalPlayers")
    totalPlayers();
    //badges();
    console.log("[SCRIPT] exportImportSettings")
    exportImportSettings(ipcRenderer);
    console.log("[PRELOAD] SUCCESSFUL LOAD ALL SCRIPTS");
});