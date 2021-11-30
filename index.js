//Force JavaScript to strict interpret.
'use strict';


document.addEventListener("DOMContentLoaded", function() {
	//Variables
	let optionMenu = document.getElementById("text-options")
	, playerWindow = document.getElementById("player-window")
	, dialogueName = document.getElementById("tx-box-name")
	, dialogueText = document.getElementById("tx-box-text")
	//All text option objects are in optionControl array
	, optionControl = [document.getElementById("option0"), document.getElementById("option1"), document.getElementById("option2")]
	, textSpeed = 20;
	playerWindow.style.visibility = "visible";

	if (optionControl) {
		optionControl[0].addEventListener("click", () => {
			writeText(dialogueName, dialogue.mexicoEvent[1].name, textSpeed);
			writeText(dialogueText, dialogue.mexicoEvent[1].dialogue, textSpeed);
		});
		optionControl[1].addEventListener("click", () => {

		});
		optionControl[2].addEventListener("click", () => {

		});
	}

	writeText(dialogueName, dialogue.mexicoEvent[0].name, textSpeed);
	writeText(dialogueText, dialogue.mexicoEvent[0].dialogue, textSpeed);
	setTimeout( ()=> { presentOptions(dialogue.eventOptions[0].options) }, 1);

	function loadFrame() {

	}
	//Functions
	function writeText(target, text, delay) {
		//Recursive Helper function for setTimeout function calls
		function recurWriteOne(item, text, currIndex, interval) {
			if (currIndex < text.length) {
				item.innerHTML += text[currIndex++];
				setTimeout( ()=> { recurWriteOne(item, text, currIndex, interval) }, interval);
			}
		}
		target.innerHTML = "";
		recurWriteOne(target, text, 0, delay);
	}

	//Anticipates array of options
	function presentOptions(choices) {
		optionMenu.style.visibility = "visible";
		for (var i = 0; i < choices.length; i++) {
			writeText(optionControl[i], choices[i], textSpeed);
		}
	}
});