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
                <group-entry id="IngameClientSettings" data-border="true" data-lock="false" data-open="false" class="svelte-82fu96">
                    <div class="title svelte-82fu96">
                        <span class="text svelte-82fu96">
                            Ingame Settings
                        </span> 
                    </div>
                    <div id="subSetIg"></div>
                </group-entry>
            `)

            settingsTab.insertAdjacentHTML("beforeend", `
                <group-entry id="CrossClientSettings" data-border="true" data-lock="false" data-open="false" class="svelte-82fu96">
                    <div class="title svelte-82fu96">
                        <span class="text svelte-82fu96">
                            Crosshair Settings
                        </span> 
                    </div>
                    <div id="subSetCross"></div>
                </group-entry>
            `)

            settingsTab.insertAdjacentHTML("beforeend", `
                <group-entry id="TtvClientSettings" data-border="true" data-lock="false" data-open="false" class="svelte-82fu96">
                    <div class="title svelte-82fu96">
                        <span class="text svelte-82fu96">
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

            toggleSettings("#IngameClientSettings > div.title.svelte-82fu96", "subSetIg")
            toggleSettings("#CrossClientSettings > div.title.svelte-82fu96", "subSetCross")
            toggleSettings("#TtvClientSettings > div.title.svelte-82fu96", "subSetTtv")

            function toggleSettings(target, id) {
                document.querySelector(target).onclick = () => {
                    if (document.getElementById(id).style.display === "inline") {
                        document.getElementById(id).style.display = "none";
                    } else {
                        document.getElementById(id).style.display = "inline";
                    }
                }
            }

            document.getElementById("ttv_help_token").onclick = () => {
                open("https://twitchapps.com/tmi/");
            }
        }, 500)
    }
}

module.exports = settingsInit;