const Store = require("electron-store");
const config = new Store();

let crosshair = function () {

    if (!config.get("crosshair")) {
        console.log("[SCRIPT] crosshair: " + false);
        return false;
    }

    console.log("[SCRIPT] crosshair: " + true);
    var newHTML = document.createElement('div');
    newHTML.innerHTML = '<img id="crosshair" src="https://cdn.discordapp.com/attachments/972232216451113070/972232662813118544/Laxzycross.png" </img>';
    document.body.appendChild(newHTML);

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    const crosshairCss = `
            #crosshair {
            position:absolute;
            display:block;
            left:1042px;
            top:578px;
            }
        `;

    addGlobalStyle(crosshairCss);

}

module.exports = crosshair;