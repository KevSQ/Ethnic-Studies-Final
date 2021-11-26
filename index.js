//Force JavaScript to strict interpret.
'use strict';


document.addEventListener("DOMContentLoaded", function() {
	//Variables
	var optionMenu = document.getElementById("text-options"); 
	var textSpeed = 30;

	document.getElementById("player-window").style.visibility = "visible";
	writeText("tx-box-text", dialogue[0].mexicoEvent[0].dialogue, textSpeed);
	presentOptions(["test","test", "this is"]);

	//Functions
	function writeText (id, text, delay) {
		//Recursive Helper function for setTimeout function calls
		function recurWriteOne(item, text, currIndex, interval) {
			if (currIndex < text.length) {
				item.innerHTML += text[currIndex++];
				setTimeout( ()=> {  recurWriteOne(item, text, currIndex, interval) }, interval);
			}
		}
		var target = document.getElementById(id);
		recurWriteOne(target, text, 0, delay);
	}

	//Anticipates array of options
	function presentOptions(choices) {
		for (var i = 0; i < choices.length; i++) {
			writeText("option" + i, choices[i], textSpeed);
		}
	}
});