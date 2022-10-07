const Store = require("electron-store");
const config = new Store();

let fpsOnUI = function () {
    let menuBox = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-tools")
    var FPS = document.querySelector("#app > app-interface > div:nth-child(2) > game-interface > game-stats > stat-item:nth-child(1) > span:nth-child(1)");
    menuBox.insertAdjacentHTML("afterbegin", `
    <span id="FPSUI" style="font-size: 2vw;"></span>
    `)

    if (!config.get("fpsOnUI")) {
        console.log("[SCRIPT] fpsOnUI: " + false)
        document.getElementById("FPSUI").style.display = "none";
    } else {
        document.getElementById("FPSUI").style.display = "block";
    }

    console.log("[SCRIPT] fpsOnUI: " + true);

    FPS.addEventListener("DOMCharacterDataModified", function (event) {
        document.getElementById("FPSUI").innerText = FPS.innerText
    });
}

module.exports = fpsOnUI;