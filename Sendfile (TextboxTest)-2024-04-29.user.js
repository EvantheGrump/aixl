// ==UserScript==
// @name         Sendfile (TextboxTest)
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
const textBox = document.createElement('input');
textBox.type = 'text';
textBox.id = 'myTextBox';
textBox.style.padding = '10px';
textBox.style.fontFamily = 'Arial, sans-serif';
textBox.style.fontSize = '14px';
textBox.style.backgroundColor = '#EFEFEF';
textBox.style.border = '2px solid #EFEFEF';
textBox.style.outline = 'none';

document.body.appendChild(textBox);
    const myTextBox = document.getElementById('myTextBox');
myTextBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const contents = myTextBox.value;
    myTextBox.value = '';
    document.getElementById("myTextBox").blur();

                      const socket = new WebSocket("ws://localhost:8765");

        socket.addEventListener("open", () => {
            // console.log("WebSocket connection established.");
            const random = Math.random();
            socket.send(random);
            // Send a sample text file content
            const preprompt = "Answer the question concisely and with all lower case letters. If it appears that the answer is already complete, just repeat it. If there are any strange strings of repeating or similar characters, for instance: iiiiiiii, ignore them. If there appears to be any repeating questions or instructions, only obey the first instance. If there is strange spacing and the question makes sense with a blank, assume the odd spacing is a blank in which to put a word. If you are asked to select and change a certain word or idea to another, write: change (x) to (y). If the question asks you to submit without changing anything, and the appropriate thing to do appears to be send no changes, just write: submit";
            const prompt = "    Here is the question:    "
            socket.send(`FILE:${preprompt+prompt+contents}`);
        });
        socket.addEventListener("message", (event) => {
            alert(`Received from server: ${event.data}`);
        });
    }
  }
);

})();
        }, false);
;