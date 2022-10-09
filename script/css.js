// https://codepen.io/alitcoy/pen/jOxYaRq

let css = function () {
    const css = `
    .checkboxSettings {
        -webkit-appearance: none;
        appearance: none;
        width: 60px;
        height: 30px;
        background-color: #ff0000;
        border-radius: 25px;
        transition: background .6s;
        cursor: pointer;
        position: relative;
    }

    .checkboxSettings::after {
        content: '';
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: #fff;
        display: block;
        position: absolute;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
        transition: left .3s;
    }

    .checkboxSettings::after{
        content: '';
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: #fff;
        display: block;
        position: absolute;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
        transition: left .3s;
    }

    .checkboxSettings:checked{
        background: green;
    }

    .checkboxSettings:checked::after{
        left: 70%;
    }

    .textSettings {
        width: 80%;
        height: 20px;
        border-radius: 5px;
        border: 0px;
        padding: 0px 10px;
    }
    `;

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

    addGlobalStyle(css)

}
module.exports = css;