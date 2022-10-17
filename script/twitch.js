const Store = require("electron-store");
const config = new Store();

const tmi = require('tmi.js');
const hastebin = require('hastebin');

let twitch = (ipcRenderer) => {
    const client = new tmi.Client({
        options: {
            debug: false
        },
        identity: {
            username: config.get("ttv_channels"),
            password: config.get("ttv_oath")
        },
        channels: [config.get("ttv_channels")]
    });

    client.connect();

    client.on('message', (channel, tags, message, self) => {
        if (self) return;

        switch (message) {
            case "!link":
                if (!config.get("ttv_cmd_link")) return;
                ipcRenderer
                    .invoke("get-link")
                    .then(link => {
                        client.say(channel, link);
                    })
                break;
            case "!settings":
                if (!config.get("ttv_cmd_settings")) return;
                ipcRenderer
                    .invoke("getSettings")
                    .then(info => {
                        hastebin.createPaste(info, {
                                raw: false,
                                contentType: 'application/json"',
                                server: 'https://hastebin.com'
                            }, {})
                            .then((urlToPaste) => {
                                client.say(channel, urlToPaste);
                            })
                    })
                break;

            case "!crosshair":
                if (!config.get("ttv_cmd_crosshair")) return;
                if (config.get("CrosshairLink")) {
                    client.say(channel, config.get("CrosshairLink"))
                } else {
                    client.say(channel, "i cant find this crosshair")
                }
                break;
            default:
                break;
        }
    });
}

module.exports = twitch;