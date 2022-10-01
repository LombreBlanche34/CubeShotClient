const Store = require("electron-store");
const config = new Store();

let cmdline = function (app) {
    if (!config.get("unlimitedFPS")) {
        console.log("[INIT] unlimitedFPS: " + false)
        return false;
    }

    console.log("[INIT] unlimitedFPS: " + true);
    app.commandLine.appendSwitch("disable-frame-rate-limit");
}

module.exports = cmdline;