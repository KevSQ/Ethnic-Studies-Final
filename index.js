//Force JavaScript to strict interpret.
'use strict';


document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("player-window").style.visibility = "visible";
	console.log(dialogue);
	writeText("tx-box-text", dialogue[0].mexicoEvent[0].dialogue, 35);
	console.log("done");


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

	}
});