var botScore=0,
	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("spock").onclick=playerThrowsSpock;
document.getElementById("lizzard").onclick=playerThrowsLizzard;

function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");

}

function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");

}

function playerThrowsSpock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"spock");

}

function playerThrowsLizzard(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"lizzards");

}

function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.2){
		botsWeapon="scissors";
	}
	else if(randomNumber<.4){
		botsWeapon="paper";
	}
	else if(randomNumber<.6){
		botsWeapon="spock";
	}
	else if(randomNumber<.8){
		botsWeapon="lizzard";
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon, playersWeapon){
	displayChoices(botsWeapon, playersWeapon);
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="scissors" && playersWeapon=="lizzard") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="paper" && playersWeapon=="spock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors") ||
		(botsWeapon=="rock" && playersWeapon=="lizzard") ||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="spock" && playersWeapon=="scissors") ||
		(botsWeapon=="lizzard" && playersWeapon=="spock") ||
		(botsWeapon=="lizzard" && playersWeapon=="paper")
		){
				increaseBotScore();
	}
	else{
		increasePlayerScore();
		displayCompleteMessage("You won");
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}


function displayChoices (botChoice, playerChoice) {
	document.getElementById("whatHappened").innerHTML=("You chose " + playerChoice + ", bot chose " + botChoice );

}

