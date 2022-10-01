
    //     let btn = document.createElement("input");
    //     btn.id = "setID";
    //     btn.type = "button";
    //     btn.value = "CLIENT SETTINGS";
    //     btn.onclick = function() {openSettings()};
    //     document.getElementsByClassName("svelte-1hkvi8c")[2].append(btn);



    //     let scriptSetings = document.createElement("script");
    //     scriptSetings.innerHTML = `
    //     function openSettings() {
    //         alert("a");
    //     }
    //     `;
    //     document.body.appendChild(scriptSetings);

let settingsInit = function () {

        let settings_btn = document.querySelector("#app > app-interface > div:nth-child(3) > menu-interface > menu-tools > menu-tool:nth-child(3)");

        settings_btn.onclick = () => {
            let cont = document.querySelector("body > modal-entry > modal-container > modal-content");
            cont.insertAdjacentHTML('beforeend', `<group-entry data-border="true" data-lock="false" data-open="true" class="svelte-etlhhs"><div class="title svelte-etlhhs"><i class="fi fi-sr-apps svelte-etlhhs"></i> <span class="text svelte-etlhhs">UI</span> <i class="uil uil-angle-down arrow svelte-etlhhs"></i></div> <group-content class="svelte-etlhhs"><option-root data-flex="false" class="svelte-1dbzzfx"><span class="svelte-1dbzzfx">FPS Stats</span>    <switch-entry class="svelte-fgttkp"><input type="checkbox" class="svelte-fgttkp"> <switch-slider class="svelte-fgttkp"></switch-slider></switch-entry>  </option-root> <option-root data-flex="false" class="svelte-1dbzzfx"><span class="svelte-1dbzzfx">Ping Stats</span>    <switch-entry class="svelte-fgttkp"><input type="checkbox" class="svelte-fgttkp"> <switch-slider class="svelte-fgttkp"></switch-slider></switch-entry>  </option-root></group-content></group-entry>`)
        }
}

module.exports = settingsInit;