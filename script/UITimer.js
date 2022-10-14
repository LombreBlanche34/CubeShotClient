const Store = require("electron-store");
const config = new Store();

let showTimerUi = function () {

    if (!config.get("UITimer")) {
        return false;
    }

    let igTimer = document.querySelector("#app > app-interface > div:nth-child(2) > game-interface > game-time > span");
    let clickToSpec = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-instructions > span");
    
    igTimer.addEventListener("DOMCharacterDataModified", function (event) {
        clickToSpec.innerText = igTimer.innerText
    });
}

module.exports = showTimerUi;
