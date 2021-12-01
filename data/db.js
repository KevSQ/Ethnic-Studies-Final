'use strict';

const dialogue = {
	//dialogue[0]
	"mexicoEvent": [ //dialogue[0].mexicoEvent
			{	//dialogue[0].mexicoEvent[0].name OR dialogue
				"options": false,
				"name" : "",
				"dialogue" : "Are you sure you want to do that? How will we feed the family? We can't quit."
			},
			{	
				"options": true,
				"name" : "Boss",
				"dialogue" : "This is what the boss will say. Ideally the rest of development will just be writing this and placing animations."
			}
	],
	"eventOptions": [
			{"options" : ["► Continue", "► does it have", "2 be 3?"] },
			{"options" : ["► Quit", "► Find New Job", "► Get Immigration Lawyer"] },
			{"options" : ["► Quit", "► Find New Job", "► Get Immigration Lawyer"] }
	],
	"allIds": ["dollar_confirmed", "dollar_rejected", "food_bowl", "papers_confirmed", "papers_rejected", "spinner", "border_map", "carrot_angry", "white", "carrot_cry"]
};


/*

To-do:

	- Send Screenshots of the website (even if its temporary, we just need something for the slides)
	- Plug everything in and find the scenario for the mexicoEVent
	- idk some other shit just finish


*/