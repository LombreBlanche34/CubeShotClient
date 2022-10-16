const Store = require("electron-store");
const config = new Store();

let showTimerUi = function () {

    let clickToSpec = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-instructions > span");
    let igTimer = document.querySelector("#app > app-interface > div:nth-child(2) > game-interface > game-time > span");

    timer = document.createElement("span");
    timer.id = "timerCustom";
    timer.style.textAlign = "center";

    clickToSpec.append(timer)

    if (!config.get("UITimer")) {
        document.getElementById("timerCustom").style.display = "none";
    } else {
        document.getElementById("timerCustom").style.display = "block";
    }
    
    igTimer.addEventListener("DOMCharacterDataModified", function (event) {
        document.getElementById("timerCustom").innerText = igTimer.innerText;
    });

}

module.exports = showTimerUi;