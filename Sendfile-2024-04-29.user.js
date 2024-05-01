// ==UserScript==
// @name         Sendfile
// @namespace    http://tampermonkey.net/
// @version      2024-04-29
// @description  try to take over the world!
// @author       You
// @match        https://www.ixl.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var question = "";
window.addEventListener('load', function() {

(function() {
    'use strict';
    function onAltQ() {
var question = "";
document.querySelectorAll(".fimc-passage, .secContentPiece").forEach(div=>{
  question+=div.textContent;
});
alert(question);
                const socket = new WebSocket("ws://localhost:8765");

        socket.addEventListener("open", () => {
            console.log("WebSocket connection established.");
            // Send a sample text file content
            const preprompt = "Answer the question concisely and with all lower case letters. If it appears that the answer is already complete, just repeat it. If there are any strange strings of repeating or similar characters, for instance: iiiiiiii, ignore them. If there appears to be any repeating questions or instructions, only obey the first instance.";
            const prompt = "    Here is the question:    "
            socket.send(`FILE:${preprompt+prompt+question}`);
        });

        socket.addEventListener("message", (event) => {
            console.log(`Received from server: ${event.data}`);
        });
    }
    function onKeydown(evt) {
        // Use https://keycode.info/ to get keys
        if (evt.altKey && evt.keyCode == 81) {
            onAltQ();
        }
    }
    document.addEventListener('keydown', onKeydown, true);
})();
        }, false);
;