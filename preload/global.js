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

            default:
                break;
        }
        ipcRenderer.send('settingsStore', id, value)
    }
})

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