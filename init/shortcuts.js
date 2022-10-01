const shortcuts = require("electron-localshortcut");

let shortcutsRegister = function (win, clipboard) {
    console.log("[INIT] shortcuts load")
    shortcuts.register(win, "Escape", () => win.webContents.executeJavaScript("document.exitPointerLock()", true));
    shortcuts.register(win, "F5", () => win.webContents.reload());
    shortcuts.register(win, "Shift+F5", () => win.webContents.reloadIgnoringCache());
    shortcuts.register(win, "CommandOrControl+L", () => clipboard.writeText(win.webContents.getURL()));
    shortcuts.register(win, "CommandOrControl+Alt+R", () => {
        app.relaunch();
        app.quit();
    });
}

module.exports = shortcutsRegister;