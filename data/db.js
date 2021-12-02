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
				"dialogue" : "...You've just moved from Mexico to the United States a couple months ago, escaping the worsening living conitions your family experienced. Currently, you work as taxi driver at an orange carrot majority business."
			},
			{	//15
				"name" : "",
				"dialogue" : "This is you, the average White carrot from Mexico. You came with your partner and two kids, who are also all white carrots."
			},
			{   //16
				"name" : "",
				"dialogue" : "Unfortunately, the US is known to be not very accepting of white carrots. As an orange carrot majority country, there's been years and years of inner-carrot race tension."
			},
			{	//17
				"name" : "",
				"dialogue" : "In fact, you've recently been having a lot of problems showing up at work. Your boss wants you to work extra hours, but you're already working 55 hours and simply can't do more."
			},
			{	//18
				"name" : "Boss",
				"dialogue" : "If you don't start to pick up more hours in five weeks, I'll report you to the authorities!"
			},
			{	//19 (FAIL)
				"name" : "",
				"dialogue" : "Despite your best attempts, after five weeks, you lost your job. Now home with your family, you fear for what the future holds for you and your loved ones."
			},
			{	//20 (WIN CHAIN)
				"name" : "",
				"dialogue" : "Despite how simple this is, it probably took you a couple of attempts to get here, right?"
			},
			{	//21
				"name" : "",
				"dialogue" : "While this may have been presented with carrots and color, there are real humans out there working jobs where they can be fired at any moment."
			},
			{	//22
				"name" : "",
				"dialogue" : "Instead of this white carrot, it could be you, working in fear of discrimination and racism."
			},
			{	//23
				"name" : "",
				"dialogue" : "We hope that this short demo helped communicate why undocumented immigrants are no different than you and I. They SHOULD have their rights protected."
			},
			{	//24
				"name" : "",
				"dialogue" : "No matter if they're a white carrot, orange carrot, or blueberry. All rights matter."
			},
			{	//25
				"name" : "",
				"dialogue" : "Thank you for playing!"
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