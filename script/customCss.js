const Store = require("electron-store");
const config = new Store();

let CustomCssLink = () => {
    if (config.get("CustomCss")) {
        let div = document.createElement('div')
        div.innerHTML = `<link rel="stylesheet" href="${config.get("CustomCssLink")}">`
        document.body.appendChild(div)
    }
}

module.exports = CustomCssLink