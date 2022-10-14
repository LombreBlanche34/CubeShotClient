const hastebin = require('hastebin');
const {
    contextBridge,
    clipboard
} = require("electron")

const prompt = require('electron-prompt');

let exportImportSettings = (ipcRenderer) => {
    let buttonSettings = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-tools > menu-tool:nth-child(4)")
    
    buttonSettings.onclick = function () {
        console.log("[LOG] buttonSettings clicked")
        let btnImport = document.createElement("input");
        btnImport.id = "exportSettings"
        btnImport.type = "button";
        btnImport.value = "EXPORT";
        btnImport.onclick = function () {
            console.log("[LOG] btnImport clicked")
            ipcRenderer
                .invoke("getSettings")
                .then(info => {
                    hastebin.createPaste(info, {
                            raw: false,
                            contentType: 'application/json"',
                            server: 'https://hastebin.com'
                        }, {})
                        .then((urlToPaste) => {
                            alert("copied to clipboard")
                            console.log(urlToPaste);
                            clipboard.writeText(urlToPaste)
                        })
                })
        };

        let btnExport = document.createElement("input");
        btnExport.id = "importSettings"
        btnExport.type = "button";
        btnExport.value = "IMPORT";
        btnExport.onclick = function () {
            console.log("[LOG] btnExport clicked")
            prompt({
                    title: 'Settings Import',
                    label: 'settings:',
                    value: '',
                    type: 'input'
                })
                .then((r) => {
                    contextBridge.exposeInMainWorld(localStorage.SettingsEvent = r)
                })
        }
        document.querySelector("body > modal-entry > modal-container > modal-title").insertAdjacentHTML("beforebegin", `<div id="settings"></div>`)
        document.getElementById("settings").append(btnImport)
        document.getElementById("settings").append(btnExport)
    }

}

module.exports = exportImportSettings;