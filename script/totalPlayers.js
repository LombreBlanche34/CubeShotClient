const Store = require("electron-store");
const config = new Store();

function fixButtonAll() {
    let buttonAll = document.querySelector("body > modal-entry > modal-container > modal-content > mode-entries > span:nth-child(1)");
    buttonAll.style.display = "inline";
    buttonAll.style.textAlign = "center";
    buttonAll.insertAdjacentHTML("beforeend", "<br> <div class='totalCountDiv'>total players: <div id='totalPlayers'>0</div></div>");

    let buttonFFA = document.querySelector("body > modal-entry > modal-container > modal-content > mode-entries > span:nth-child(2)")
    buttonFFA.style.display = "inline";
    buttonFFA.style.textAlign = "center";
    buttonFFA.insertAdjacentHTML("beforeend", "<br> <div class='totalCountDiv'>total players: <div id='totalPlayersFFA'>0</div></div>");

    let buttonTDM = document.querySelector("body > modal-entry > modal-container > modal-content > mode-entries > span:nth-child(3)")
    buttonTDM.style.display = "inline";
    buttonTDM.style.textAlign = "center";
    buttonTDM.insertAdjacentHTML("beforeend", "<br> <div class='totalCountDiv'>total players: <div id='totalPlayersTDM'>0</div></div>");
}

function request() {
    fetch('https://matchmaker.cubeshot.io/list')
        .then(res => res.json())
        .then(body => {
            var totalPlayerAll = 0;
            var totalPlayerFFA = 0;
            var totalPlayerTDM = 0;
            for (let i = 0; i < body.length; i++) {
                if (body[i].modeIndex === 0) {
                    totalPlayerFFA += body[i].players;
                    totalPlayerAll += body[i].players;
                } else if (body[i].modeIndex === 1) {
                    totalPlayerTDM += body[i].players;
                    totalPlayerAll += body[i].players;
                }
            }
            try {
                document.getElementById("totalPlayers").innerText = totalPlayerAll;
                document.getElementById("totalPlayersFFA").innerText = totalPlayerFFA;
                document.getElementById("totalPlayersTDM").innerText = totalPlayerTDM;
            } catch {

            }
        })
}

let totalPlayers = function () {
    let serverButton = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-entry > menu-options > side-item:nth-child(3) > span");
    serverButton.onclick = function () {
        setTimeout(() => {
            fixButtonAll();
            if (!config.get("totalPlayers")) {
                document.querySelector("body > modal-entry > modal-container > modal-content > mode-entries > span:nth-child(1) > div").style.display = "none";
                document.querySelector("body > modal-entry > modal-container > modal-content > mode-entries > span:nth-child(2) > div").style.display = "none";
                document.querySelector("body > modal-entry > modal-container > modal-content > mode-entries > span:nth-child(3) > div").style.display = "none";
            }
            setInterval(() => {
                request()
            }, 1000);
        }, 1000);
    };
}

module.exports = totalPlayers;