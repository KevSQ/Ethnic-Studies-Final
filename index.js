//Force JavaScript to strict interpret.
'use strict';


document.addEventListener("DOMContentLoaded", function() {
	//Variables
	//All text option objects (all three of them) are in optionControl array
	let optionControl = [document.getElementById("option0"), document.getElementById("option1"), document.getElementById("option2")]
	, playerWindow = document.getElementById("player-window")
	, dialogueName = document.getElementById("tx-box-name")
	, dialogueText = document.getElementById("tx-box-text")
	, optionMenu = document.getElementById("text-options")
	, animationControl = document.getElementsByClassName("animation")
	, textSpeed = 10
	, eventID1 = 0
	, eventID2 = 0
	, eventID3 = 0
	, canWrite = true;

	//Show Game Window on load and load initial frame.
	playerWindow.style.visibility = "visible";
	hideAll();
	//Load Initial three frames; startup before gameplay takes about 16 seconds.
	loadNextFrame(null, null, 11, 6);
	setTimeout( () => { loadNextFrame(null, null, 12, 6)}, 8000 );
	setTimeout( () => { loadNextFrame(null, null, 13, 6)}, 16000 );
	setTimeout( () => { loadNextFrame(null, "border_map", 14, 6)}, 18000 );
	setTimeout( () => { loadNextFrame("all", "white", 15, 6)}, 24000);
	setTimeout( () => { loadNextFrame(null, "orange", 16, 6)}, 28000);
	setTimeout( () => { loadNextFrame("all", "carrot_angry", 17, 6)}, 34000);
	setTimeout( () => { loadNextFrame("all", "carrot_angry", 18, 6)}, 40000);
	setTimeout( () => { loadNextFrame("all", "carrot_angry", 3)}, 44000);
	/* How Frame drawing works: After verifying all button objects exist, we attach
	event listeners to them. When any of the three buttons is pressed, we check which
	event number we're at for each individual button (i.e., each button has its own
	tracker to make it easy to track what frame/event needs to be loaded next).
	After loading, we return and exit the switch */

	//setTimeout( () => { loadNextFrame})
	if (optionControl) {
		optionControl[0].addEventListener("click", () => {
			switch (eventID1) {
				//Quit
				case 0:
					loadNextFrame("all", "food_bowl", 0);
					eventID1 = 1;
					return
				case 1:
					loadNextFrame("all", "white", 3);
					eventID1 = 0;
					return
			}
		});
		optionControl[1].addEventListener("click", () => {
			switch (eventID2) {
				case 0:
					loadNextFrame("all", "orange", 1, 1);
					eventID2 = parseInt(weightedRandom({1:0.8, 2:0.05, 3:0.05, 4:0.05, 5:0.05}));
					return
				case 1:
					loadNextFrame("all", "orange", 2, 1);
					eventID2 = 0;
					return
				case 2:
					loadNextFrame("all", "dollar_confirmed", 4, 3);
					return
				case 3:
					loadNextFrame("all", "dollar_confirmed", 5, 3);
					return
				case 4:
					loadNextFrame("all", "dollar_confirmed", 6, 3);
					return
				case 5:
					loadNextFrame("all", "dollar_confirmed", 7, 3);
					return
			}
		});
		optionControl[2].addEventListener("click", () => {
			switch (eventID3) {
				case 0:
					loadNextFrame("all", "white", 8, 2);
					eventID3 = parseInt(weightedRandom({1:0.7, 2:0.3}));
					return
				case 1:
					loadNextFrame("all", "papers_rejected", 9, 2);
					return
				case 2:
					loadNextFrame("all", "papers_confirmed", 10, 2);
					return
			}
		});
	}

	//Functions

	/* Takes which animation to hide, which animation to display, and what text to load from the database file.
	 If "all" is passed for the first argument, all IDs are hidden. You can also invoke
	a specific options menu, although that is optional. If nothing is passed for it, it will load based on what was passed for
	databaseNumber.  */
	function loadNextFrame(oldAnimationID, newAnimationID, databaseNumber, optionNumber) {
		let oldAni = document.getElementById(oldAnimationID)
		,	newAni = document.getElementById(newAnimationID);
		if (oldAni) { 
			oldAni.src = "assets/blank.png"; 
		} else if (oldAnimationID === "all") {
			hideAll();
		}
		if (newAni) { 
			newAni.src = "assets/" + newAnimationID + ".gif";
		}
		writeText(dialogueName, dialogue.mexicoEvent[databaseNumber].name, textSpeed);
		writeText(dialogueText, dialogue.mexicoEvent[databaseNumber].dialogue, textSpeed);
		(arguments.length == 3) ? presentOptions(databaseNumber) : presentOptions(optionNumber);
		// if (arguments.length == 4 && arguments[3] == 1) {
		// }
	}
	/* Writes to target Element object one character at a time. */
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
	//Anticipates an integer.
	function presentOptions(accessNumber) {
		var choices = dialogue.eventOptions[accessNumber].options;
		optionMenu.style.opacity = 1;
		for (var i = 0; i < choices.length; i++) {
			writeText(optionControl[i], choices[i], textSpeed);
		}
	}
	//Hides all animations
	//NOTE: Hidden attributes cannot fire events, so we must use opacity instead.
	function hideAll() {
		for (var i = 0; i < animationControl.length; i++) {
			animationControl[i].src = "assets/blank.png";
		}
	}
	//Random Number generation w/ weighted probability 
	function weightedRandom(prob) {
	  let i, sum = 0, r = Math.random();
	  for (i in prob) {
	    sum += prob[i];
	    if (r <= sum) return i;
	  }
	}
});