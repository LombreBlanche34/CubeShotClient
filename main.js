"use strict";
const {
    app,
    BrowserWindow,
    clipboard,
    protocol,
} = require('electron')
const Store = require("electron-store");
const config = new Store();
const path = require("path");

const cmdline = require("./init/cmdline");
const shortcuts = require("./init/shortcuts");
// swapper from krunker FrenchChadsClient (ty azerptiop)
const Swapper = require("./script/swapper");

config.set("unlimitedFPS", true);
config.set("timer", true);
config.set("crosshair", true);


console.log(`cubeshotclient@${app.getVersion()} { Electron: ${process.versions.electron}, Node: ${process.versions.node}, Chromium: ${process.versions.chrome} }`);

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1600,
        height: 900,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, "/preload/global.js"),
            contextIsolation: false
        }
    });
    win.loadURL("https://cubeshot.io");
    win.webContents.openDevTools();
    shortcuts(win, clipboard);

    protocol.registerFileProtocol('file', (request, callback) => {
        const pathname = decodeURIComponent(request.url.replace('file:///', ''));
        callback(pathname);
    });

    protocol.registerFileProtocol("cubeshotswapper", (request, callback) => callback(decodeURI(request.url.replace(/^cubeshotswapper:/, ""))));

    const swapper = new Swapper(app);
}

cmdline(app);

app.on('ready', createWindow);