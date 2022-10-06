const Store = require("electron-store");
const config = new Store();

let crosshair = function () {

    var crosshairDOM = document.createElement('img');
        crosshairDOM.id = 'crosshair';
        crosshairDOM.src = config.get("CrosshairLink");
        crosshairDOM.style.position = 'absolute';
        crosshairDOM.style.left = config.get("CrosshairLeft") + "px" || "936px"; 
        crosshairDOM.style.top = config.get("CrosshairTop") + "px" || "516px";
        document.body.appendChild(crosshairDOM);

    if (!config.get("CustomCrosshair") && !config.get("CrosshairLink")) {
        console.log("[SCRIPT] CustomCrosshair: " + false);
        crosshairDOM.style.display = 'none';
        return false;
    }

    console.log("[SCRIPT] CustomCrosshair: " + true);

    crosshairDOM.style.display = 'block';
}

module.exports = crosshair;