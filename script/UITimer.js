const Store = require("electron-store");
const config = new Store();

let showTimerUi = function () {

    if (!config.get("timer")) {
        console.log("[SCRIPT] timer: " + false)
        return false;
    }

    console.log("[SCRIPT] timer: " + true)

    var timerUi;
    var clickToSpec = document.getElementsByClassName('text svelte-8yebgp');

    function applyTimerUi() {
        
        timerUi = document.getElementsByClassName("text svelte-sswfbw");
        clickToSpec[1].innerText = timerUi[0].innerText;
    }

    setInterval(applyTimerUi, 1000);
}

module.exports = showTimerUi;