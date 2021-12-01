'use strict';

const dialogue = {
	//dialogue[0]
	"mexicoEvent": [ //dialogue[0].mexicoEvent
			{	//dialogue[0].mexicoEvent[0].name
				"name" : "",
				"dialogue" : "Are you sure you want to do that? How will we feed the family? We can't quit."
			},
			{	//1
				"name" : "Manager",
				"dialogue" : "I'm sorry, we don't employ white carrots here. Maybe the business down the road?"
			},
			{	//2
				"name" : "",
				"dialogue" : "You were unsuccessful in your attempt to get a job. Apply to another job?"
			},
			{	//3
				"name" :"",
				"dialogue" : "What will you do?"
			},
			{	//4
				"name" : "Construction Manager",
				"dialogue" : "Congratulations! Welcome to the team. You'll be on the landscaping team. As a white carrot, you'll be making only $16.23."
			},
			{	//5
				"name" : "Restaurant Manager",
				"dialogue" : "Hey! Welcome to the service team. You'll be a waiter servicing our McDiscrimination restaurant. As a white carrot, your starting wage is only $7.25."
			},
			{	//6
				"name" : "Technical Manager",
				"dialogue" : "Congratulations! You've been hired to join our mobile TV Home Service & Repair team. As a white carrot, you'll be making only $12.37."
			},
			{	//7
				"name" : "Cleaning Manager",
				"dialogue" : "Welcome to the job. You'll be cleaning homes and servicing them when needed. As a white carrot, you'll be making only $9.00."
			},
			{	//8
				"name" : "",
				"dialogue" : "Afraid of what might happen if you're fired or can't find a job, you hire an immigration lawyer to help you obtain citizenship and labor rights."
			},
			{	//9
				"name" : "Lawyer",
				"dialogue" : "Unfortunately, I couldn't get your application approved... white carrots are no longer welcome around here."
			},
			{	//10
				"name" : "Lawyer",
				"dialogue" : "Hey, congratulations! Your application for citizenship has been approved! You can now obtain a new job, full of benefits and rights protection."
			},
			{	//11 {INTRO}
				"name" : "",
				"dialogue" : "Welcome to our interactice experience! The following is not an accurate representation of undocumented workers. All characters and lines are works of fiction."
			},
			{
				//12
				"name" : "",
				"dialogue" : "Moreover, the project is currently in development. If you experience bugs or errors, please kindly continue or restart, whichever is more preferred."
			},
			{
				//13
				"name" : "",
				"dialogue" : "Enjoy!"
			},
			{   //14
				"name" : "",
				"dialogue" : "...You've just moved from Whitelandia a couple months ago, in a pursuit for a new life for you and your family. You've been taking any and all jobs available to you in order to survive."
			},
			{
				"name" : "",
				"dialogue" : "This is you, the average White carrot from Whitelandia. You came with your partner and two kids, who are also all white carrots."
			}
	],
	"eventOptions": [
			{"options" : ["► Continue", "", ""] },
			{"options" : ["", "► Continue", ""] },
			{"options" : ["", "", "► Continue"] },
			{"options" : ["► Quit", "► Find New Job", "► Get Immigration Lawyer"] },
			{"options" : ["► Quit", "► Find New Job", "► Get Immigration Lawyer"] },
			{"options" : ["► Try Again", "", ""] },
			{"options" : ["", "", ""] }
	],

	"money" : 0,
	"week" : 0
};


/*

To-do:

	- Send Screenshots of the website (even if its temporary, we just need something for the slides)
	- Plug everything in and find the scenario for the mexicoEVent
	- idk some other shit just finish


*/