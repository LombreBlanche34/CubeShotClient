const Store = require("electron-store");
const config = new Store();

function getNullOrCheck(value) {
    if (config.get(value)) {
        return "checked";
    } else {
        return;
    }
}

let loadSettings = function () {
    const data = {
        unlimitedFPS: {
            name: "Unlimited FPS (not recommended)",
            id: "unlimitedFPS",
            type: "checkbox",
            checked: getNullOrCheck("unlimitedFPS"),
            needsRestart: "inline"
        },
        swapper: {
            name: "swapper (documents/cubeshotswapper)",
            id: "swapper",
            type: "checkbox",
            checked: getNullOrCheck("swapper"),
            needsRestart: "inline"
        },
        UITimer: {
            name: "UITimer",
            id: "UITimer",
            type: "checkbox",
            checked: getNullOrCheck("UITimer"),
            needsRestart: "none"
        },
        fpsOnUI: {
            name: "FPS on UI",
            id: "fpsOnUI",
            type: "checkbox",
            checked: getNullOrCheck("fpsOnUI"),
            needsRestart: "none"
        },
        bulletAlert: {
            name: "bullet alert",
            id: "bulletAlert",
            type: "checkbox",
            checked: getNullOrCheck("bulletAlert"),
            needsRestart: "inline"
        },
        totalPlayers: {
            name: "total players on server tab",
            id: "totalPlayers",
            type: "checkbox",
            checked: getNullOrCheck("totalPlayers"),
            needsRestart: "none"
        },
        CustomCrosshair: {
            name: "Custom Crosshair",
            id: "CustomCrosshair",
            type: "checkbox",
            checked: getNullOrCheck("CustomCrosshair"),
            needsRestart: "none"
        },
        CustomCrosshairLink: {
            name: "Crosshair Link (.png link)",
            id: "CrosshairLink",
            type: "text",
            value: config.get("CrosshairLink") || "",
            needsRestart: "none"
        },
        CustomCrosshairLeft: {
            name: "Crosshair left (px)",
            id: "CrosshairLeft",
            type: "text",
            value: config.get("CrosshairLeft"),
            needsRestart: "none"
        },
        CustomCrosshairTop: {
            name: "Crosshair top (px)",
            id: "CrosshairTop",
            type: "text",
            value: config.get("CrosshairTop"),
            needsRestart: "none"
        },
    }
    return data;
}


module.exports = loadSettings;