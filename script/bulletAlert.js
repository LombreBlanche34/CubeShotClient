const Store = require("electron-store");
const config = new Store();

let bulletAlert = function () {

    if (!config.get("bulletAlert")) {
        console.log("[SCRIPT] bulletAlert: " + false)
        return false;
    }
    console.log("[SCRIPT] bulletAlert: " + true)

    let bulletLeft = document.querySelector("#app > app-interface > div:nth-child(2) > game-interface > player-ammo > span.mag.svelte-1quzmtf");
    let bulletTotal = document.querySelector("#app > app-interface > div:nth-child(2) > game-interface > player-ammo > span.clip.svelte-1quzmtf")

    bulletLeft.addEventListener("DOMCharacterDataModified", function (event) {
        console.log(bulletLeft.innerText);
        if (bulletLeft.innerText < bulletTotal.innerText / 3) {
            bulletLeft.style.color = "red";
            bulletLeft.style.fontSize = "9vw"
        } else {
            bulletLeft.style.color = "white";
            bulletLeft.style.fontSize = "3vw";
        }
    });
}

module.exports = bulletAlert;