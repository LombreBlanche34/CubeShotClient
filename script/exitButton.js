const remote = require('electron').remote;

let exitButton = function () {
    let btn = document.createElement("input");
    btn.type = "button";
    btn.value = "CLOSE CLIENT";
    btn.onclick = function () {
        var window = remote.getCurrentWindow();
        window.destroy();
    };

    document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-tools").append(btn);
}

module.exports = exitButton;
