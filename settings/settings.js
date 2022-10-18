// idfk what and how i did but its work so dont change it
const loadSettings = require("./data");
const open = require('open');

let settingsInit = function () {

    let buttonSettings = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-tools > menu-tool:nth-child(3) > i")

    buttonSettings.onclick = function () {
        setTimeout(() => {
            
            document.querySelector("body > modal-entry > modal-container > modal-content > span").style.display = 'none';
            
            data = loadSettings();
            
            let settingsTab = document.querySelector("body > modal-entry > modal-container > modal-content");

            settingsTab.insertAdjacentHTML("beforeend", `
                <group-entry id="IngameClientSettings" data-border="true" data-lock="false" data-open="false" class="svelte-1m0j93a">
                    <div class="title svelte-1m0j93a">
                        <span class="text svelte-1m0j93a">
                            Ingame Settings
                        </span> 
                    </div>
                    <div id="subSetIg"></div>
                </group-entry>
            `)

            settingsTab.insertAdjacentHTML("beforeend", `
                <group-entry id="CrossClientSettings" data-border="true" data-lock="false" data-open="false" class="svelte-1m0j93a">
                    <div class="title svelte-1m0j93a">
                        <span class="text svelte-1m0j93a">
                            Crosshair Settings
                        </span> 
                    </div>
                    <div id="subSetCross"></div>
                </group-entry>
            `)

            settingsTab.insertAdjacentHTML("beforeend", `
                <group-entry id="TtvClientSettings" data-border="true" data-lock="false" data-open="false" class="svelte-1m0j93a">
                    <div class="title svelte-1m0j93a">
                        <span class="text svelte-1m0j93a">
                            Twitch Settings
                        </span> 
                    </div>
                    <div id="subSetTtv"></div>
                </group-entry>
            `)

            subSetIg = document.getElementById("subSetIg");
            subSetCross = document.getElementById("subSetCross");
            subSetTtv = document.getElementById("subSetTtv");

            for (let i = 0; i < Object.values(data).length; i++) {
                switch (Object.values(data)[i].type) {

                    case "checkbox":
                        eval(Object.values(data)[i].cat).insertAdjacentHTML('beforeend', `
                            <option-root data-flex="false" class="svelte-1dbzzfx">
                            <span class="svelte-1dbzzfx">
                            ${Object.values(data)[i].name}
                            <span style='color: #eb5656; display: ${Object.values(data)[i].needsRestart}' >*</span>
                        </span>
                                <input type="checkbox" class="checkboxSettings" id="${Object.values(data)[i].id}" onclick='window.electronAPI.settingsStore("${Object.values(data)[i].id}", document.getElementById("${Object.values(data)[i].id}").checked)' ${Object.values(data)[i].checked}>
                            </option-root>
                        `)
                        break;

                    case "text":
                        eval(Object.values(data)[i].cat).insertAdjacentHTML('beforeend', `
                            <option-root data-flex="false" class="svelte-1dbzzfx">
                                <span class="svelte-1dbzzfx">
                                    ${Object.values(data)[i].name}
                                    <span style='color: #eb5656; display: ${Object.values(data)[i].needsRestart}' >*</span>
                                </span>
                                <input type="${Object.values(data)[i].realType}" class="textSettings" id="${Object.values(data)[i].id}" oninput='window.electronAPI.settingsStore("${Object.values(data)[i].id}", document.getElementById("${Object.values(data)[i].id}").value)' value='${Object.values(data)[i].value}' placeholder='${Object.values(data)[i].placeholder}'>
                            </option-root>
                        `)
                        break;

                    case "button":
                        eval(Object.values(data)[i].cat).insertAdjacentHTML('beforeend', `
                                <option-root data-flex="false" class="svelte-1dbzzfx">
                                    <input type="${Object.values(data)[i].type}"  id="${Object.values(data)[i].id}" value="${Object.values(data)[i].value}">
                                </option-root>
                            `)
                        break;
                    default:
                        break;
                }
                console.log("[SETTINGS] " + Object.values(data)[i].id)
            }

            document.querySelector("#IngameClientSettings > div.title.svelte-1m0j93a").onclick = () => {
                if (document.getElementById("subSetIg").style.display === "inline") {
                    document.getElementById("subSetIg").style.display = "none";
                } else {
                    document.getElementById("subSetIg").style.display = "inline";
                }
            }

            document.querySelector("#CrossClientSettings > div.title.svelte-1m0j93a").onclick = () => {
                if (document.getElementById("subSetCross").style.display === "inline") {
                    document.getElementById("subSetCross").style.display = "none";
                } else {
                    document.getElementById("subSetCross").style.display = "inline";
                }
            }

            document.querySelector("#TtvClientSettings > div.title.svelte-1m0j93a").onclick = () => {
                if (document.getElementById("subSetTtv").style.display === "inline") {
                    document.getElementById("subSetTtv").style.display = "none";
                } else {
                    document.getElementById("subSetTtv").style.display = "inline";
                }
            }

            document.getElementById("ttv_help_token").onclick = () => {
                open("https://twitchapps.com/tmi/");
            }
        }, 500)
    }
}

module.exports = settingsInit;