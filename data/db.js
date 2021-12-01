'use strict';

const dialogue = {
	//dialogue[0]
	"mexicoEvent": [ //dialogue[0].mexicoEvent
			{	//dialogue[0].mexicoEvent[0].name OR dialogue
				"name" : "",
				"dialogue" : "Are you sure you want to do that? How will we feed the family? We can't quit."
			},
			{	
				"name" : "Manager",
				"dialogue" : "I'm sorry, we don't employ white carrots here. Perhaps the establishment down the road may help?"
			},
			{
				"name" : "",
				"dialogue" : "You were unsuccessful in your attempt to get a job. Apply to another job?"
			},
			{
				"name" :"",
				"dialogue" : "What will you do?"
			},
			{
				"name" : "Construction Manager",
				"dialogue" : "Congratulations!"
			}
	],
	"eventOptions": [
			{"options" : ["► Continue", "", ""] },
			{"options" : ["", "► Continue", ""] },
			{"options" : ["", "", "► Continue"] },
			{"options" : ["► Quit", "► Find New Job", "► Get Immigration Lawyer"] },
			{"options" : ["► Quit", "► Find New Job", "► Get Immigration Lawyer"] }
	]
};


/*

To-do:

	- Send Screenshots of the website (even if its temporary, we just need something for the slides)
	- Plug everything in and find the scenario for the mexicoEVent
	- idk some other shit just finish


*/