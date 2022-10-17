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
            realType: "text",
            value: config.get("CrosshairLink") || "",
            needsRestart: "none"
        },
        CustomCrosshairLeft: {
            name: "Crosshair left (px)",
            id: "CrosshairLeft",
            type: "text",
            realType: "text",
            value: config.get("CrosshairLeft"),
            needsRestart: "none"
        },
        CustomCrosshairTop: {
            name: "Crosshair top (px)",
            id: "CrosshairTop",
            type: "text",
            realType: "text",
            value: config.get("CrosshairTop"),
            needsRestart: "none"
        },
        ttv_oath: {
            name: "ttv bot password",
            id: "ttv_oath",
            type: "text",
            realType: "password",
            placeholder: "oauth:...",
            value: config.get("ttv_oath") || "",
            needsRestart: "inline"
        },
        ttv_help_token: {
            name: "help token",
            id: "ttv_help_token",
            type: "button",
            value: "get bot password",
            href: "https://twitchapps.com/tmi/"
        },
        ttv_channels: {
            name: "ur ttv channel",
            id: "ttv_channels",
            type: "text",
            realType: "text",
            placeholder: "Lombre_Blanche34",
            value: config.get("ttv_channels") || "",
            needsRestart: "inline"
        },
        ttv_cmd_link: {
            name: "ttv link command",
            id: "ttv_cmd_link",
            type: "checkbox",
            checked: getNullOrCheck("ttv_cmd_link"),
            needsRestart: "none"
        },
        ttv_cmd_settings: {
            name: "ttv settings command",
            id: "ttv_cmd_settings",
            type: "checkbox",
            checked: getNullOrCheck("ttv_cmd_settings"),
            needsRestart: "none"
        },
        ttv_cmd_crosshair: {
            name: "ttv crosshair command",
            id: "ttv_cmd_crosshair",
            type: "checkbox",
            checked: getNullOrCheck("ttv_cmd_crosshair"),
            needsRestart: "none"
        },
    }
    return data;
}


module.exports = loadSettings;