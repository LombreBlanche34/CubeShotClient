// swapper from krunker FrenchChadsClient (ty azerptiop)
const path = require("path");
const fs = require("fs");
const {session} = require("electron");
const Store = require("electron-store");
const config = new Store();

class Swapper {
    
    constructor(app) {
        if (!config.get("swapper")) {
            return false;
        }

        this.app = app;
        this.urls = [];

        this.swapFolder = this.getSwapFolder();

        console.log("[SWAPPER] Resource swapper initialized");
        let files = this.searchFiles(this.swapFolder);
        this.applyRedirect(files);
        console.log("[SWAPPER] Resource swapper loaded");
    }

    getSwapFolder() {
        let swapFolder = path.join(this.app.getPath("documents"), "/cubeshotswapper");
        if(!fs.existsSync(swapFolder)) {
            fs.mkdirSync(swapFolder);
            console.log(`[SWAPPER] Swapper folder created at ${swapFolder}`);
        }
        return swapFolder;
    }

    searchFiles(dir, arrayOfFiles=[]) {
        let files = fs.readdirSync(dir)
        arrayOfFiles = arrayOfFiles || []
        files.forEach(function(file) {
            if (fs.statSync(dir + "/" + file).isDirectory()) {
                arrayOfFiles = this.searchFiles(dir + "/" + file, arrayOfFiles)
            } else {
                arrayOfFiles.push("https://cubeshot.io/" + dir.split("cubeshotswapper/")[1] + "/" + file)
            }
        }.bind(this))
        return arrayOfFiles
    }

    applyRedirect(files) {
        if(files.length === 0) return;
        session.defaultSession.webRequest.onBeforeRequest({
            urls: files
        }, (details, callback) => {
            callback({
                redirectURL: "cubeshotswapper:/" + path.join(this.swapFolder, new URL(details.url).pathname)
            });
        });
    }
}

module.exports = Swapper;