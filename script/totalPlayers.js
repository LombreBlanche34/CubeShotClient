const Store = require("electron-store");
const config = new Store();

function fixButtonAll() {
    let buttonAll = document.querySelector("body > modal-entry > modal-container > modal-content > mode-entries > span:nth-child(1)");
    buttonAll.style.display = "inline";
    buttonAll.style.textAlign = "center";
    buttonAll.insertAdjacentHTML("beforeend", "<br> <div id='totalCountDiv'>total players: <div id='totalPlayers'></div></div>");
}

function fetchTotal() {
    setInterval(() => {
        fetch('https://matchmaker.cubeshot.io/list')
            .then(res => res.json())
            .then(body => {
                var totalPlayerOnline = 0;
                for (let i = 0; i < body.length; i++) {
                    if (body[i].players > 0) {
                        totalPlayerOnline += body[i].players;
                    }
                }
                try {
                    document.getElementById("totalPlayers").innerText = totalPlayerOnline;
                } catch {}
            })
    }, 1000)

}

let totalPlayers = function () {

    console.log("start")

    fetchTotal()

    let serverButton = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-entry > menu-options > side-item:nth-child(3) > span");

    serverButton.onclick = function () {
        setTimeout(() => {
            fixButtonAll()

            let totalPlayersDiv = document.getElementById("totalCountDiv")
            console.log(config.get("totalPlayers"))
            if (!config.get("totalPlayers")) {
                totalPlayersDiv.style.display = "none";
            } else {
                totalPlayersDiv.style.display = "inline";
            }
        }, 1000)
    }
}

module.exports = totalPlayers;