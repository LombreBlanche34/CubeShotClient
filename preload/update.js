const open = require('open');

let update = (ipcRenderer) => {

    ipcRenderer
        .invoke("get-version")
        .then(info => {
            const actualVersion = info;
            fetch('https://api.github.com/repos/LombreBlanche34/CubeshotClient/releases/latest')
                .then(res => res.json())
                .then(body => {

                    var lastVersion = body.tag_name;
                    lastVersion = lastVersion.split("v")[1];

                    console.log(actualVersion);
                    console.log(lastVersion);

                    if (actualVersion != lastVersion) {
                        if (confirm('New version found ! Download it ? actual: ' + actualVersion + " last: " + lastVersion)) {
                            open(body.assets[0].browser_download_url);
                        } else {
                            return;
                        }
                    }
                })
        });

}

module.exports = update;