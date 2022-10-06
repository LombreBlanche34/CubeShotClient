const Store = require("electron-store");
const config = new Store();

let crosshair = function () {

    var crosshairDOM = document.createElement('img');
        crosshairDOM.id = 'crosshair';
        crosshairDOM.src = config.get("CrosshairLink");
        crosshairDOM.style.position = 'absolute';
        crosshairDOM.style.left = config.get("CrosshairLeft") + "px"; 
        crosshairDOM.style.top = config.get("CrosshairTop") + "px";
        document.body.appendChild(crosshairDOM);

    if (!config.get("CustomCrosshair")) {
        console.log("[SCRIPT] CustomCrosshair: " + false);
        crosshairDOM.style.display = 'none';
        return false;
    }

    console.log("[SCRIPT] CustomCrosshair: " + true);

    crosshairDOM.style.display = 'block';
}

module.exports = crosshair;