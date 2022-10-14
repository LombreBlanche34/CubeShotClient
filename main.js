"use strict";
const {
    app,
    BrowserWindow,
    clipboard,
    protocol,
    ipcMain
} = require('electron')
const Store = require("electron-store");
const config = new Store();
const path = require("path");

// swapper from krunker FrenchChadsClient (ty azerptiop)
const Swapper = require("./script/swapper");
const cmdline = require("./init/cmdline");
const shortcuts = require("./init/shortcuts");

console.log(`cubeshotclient@${app.getVersion()} { Electron: ${process.versions.electron}, Node: ${process.versions.node}, Chromium: ${process.versions.chrome} }`);

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1600,
        height: 900,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, "/preload/global.js"),
            contextIsolation: true
        }
    });
    win.loadURL("https://cubeshot.io");
    //win.webContents.openDevTools();
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

ipcMain.on('settingsStore', (event, id, value) => {
    config.set(id, value)
});

ipcMain.handle("get-version", () => (
    app.getVersion()
));

ipcMain.handle("getSettings", () => (
    win.webContents.executeJavaScript("localStorage.SettingsEvent")
));

ipcMain.handle("get-username", () => (
    win.webContents.executeJavaScript("JSON.parse(localStorage.PlayerEvent).username")
    
));

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
