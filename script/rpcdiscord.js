const rpc = require("discord-rpc");
const client = new rpc.Client({
    transport: 'ipc'
});
var RPCDATA = {
    "ClientID": "1030421760924991488",
    "LargeImage": "favicon",
    "LargeImageText": "CubeShotClient",
    "SmallImage": "pp",
    "SmallImageText": "Lombre_Blanche34",
    "Button1": "Download",
    "Url1": "https://github.com/LombreBlanche34/CubeShotClient",
    "Button2": "Discord",
    "Url2": "https://discord.gg/Wfj2XTxSqV",
    "State": "version",
    "Details": "username"
}

let rpcDiscord = (ipcRenderer) => {
    // setTimeout(() => {
    //     ipcRenderer
    //     .invoke("get-version")
    //     .then(version => {
    //         RPCDATA.State = "version: " + version;
    //     })

    //     ipcRenderer
    //     .invoke("get-username")
    //     .then(username => {
    //         RPCDATA.Details = "username: " + username;
    //         if (!username) {
    //             RPCDATA.Details = "username: Guest";
    //         }
    //     })
    // }, 1000)

    ipcRenderer
        .invoke("get-version")
        .then(version => {
            RPCDATA.State = "version: " + version;
        })

    ipcRenderer
        .invoke("get-username")
        .then(username => {
            RPCDATA.Details = "username: " + username;
            if (!username) {
                RPCDATA.Details = "username: Guest";
            }
        })
    client.login({
        clientId: RPCDATA.ClientID
    })

    setTimeout(() => {
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: RPCDATA.Details,
                state: RPCDATA.State,
                timestamps: {
                    start: Date.now()
                },
                assets: {
                    large_image: RPCDATA.LargeImage,
                    large_text: RPCDATA.LargeImageText,
                    small_image: RPCDATA.SmallImage,
                    small_text: RPCDATA.SmallImageText,
                },
                buttons: [{
                        label: RPCDATA.Button1,
                        url: RPCDATA.Url1
                    },
                    {
                        label: RPCDATA.Button2,
                        url: RPCDATA.Url2
                    },
                    //labels are the buttons that you wanna provide to your rich presence and urls are the links that leads you when someone press that button
                    //Note the button won't work for you but don't worry it work for others
                ]
            }
        })
    }, 2000)

}

module.exports = rpcDiscord;