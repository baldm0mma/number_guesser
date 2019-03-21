

var rangeUpdateButton = document.querySelector(".range-box__button");
	
	var minValueOutput = document.querySelector(".guess-box__range--low");
	
	var maxValueOutput = document.querySelector(".guess-box__range--high");

	var minValueInput = document.querySelector(".range-box__form--1--input");
	
	var maxValueInput = document.querySelector(".range-box__form--2--input");


var submitGuessButton = document.querySelector(".guess-box__submit");
	
	var name1 = document.querySelector(".guess-box__ch1--input");
	var scoreBoxName1 = document.querySelector(".score-box__display--ch1--name")

	var name2 = document.querySelector(".guess-box__ch2--input");
	var scoreBoxName2 = document.querySelector(".score-box__display--ch2--name")

	var guess1 = document.querySelector(".guess-box__ch1--guess");
	var guess1Output = document.querySelector(".score-box__display--ch1--num");
	
	
	var guess2 = document.querySelector(".guess-box__ch2--guess");
	var guess2Output = document.querySelector(".score-box__display--ch2--num");

var randomNumber;


var clearGameButton = document.querySelector(".guess-box__clear");

var resetGameButton = document.querySelector(".guess-box__reset");

window.addEventListener("load", generateRandomNumber);

rangeUpdateButton.addEventListener("click", updateRange);

submitGuessButton.addEventListener("click", updateNameGuess);

clearGameButton.addEventListener("click", clearGame);

resetGameButton.addEventListener("click", resetFields);






function resetFields() {
	name1.value = "";
	name2.value = "";
	guess1.value = "";
	guess2.value = "";
	guess2Output.innerText = "?";
	guess1Output.innerText = "?";
	scoreBoxName1.innerText= "Challenger 1";
	scoreBoxName2.innerText= "Challenger 2";
		console.log(name1.value);
		console.log(name2.value);
		console.log(guess2.value);
		console.log(guess1.value);
}


function clearGame(event) {
	window.location.reload();
}

function updateRange(event) {
	event.preventDefault();
	minValueOutput.innerText = minValueInput.value;
	maxValueOutput.innerText = maxValueInput.value;
		console.log(minValueInput.value);
		console.log(maxValueInput.value);
}

function updateNameGuess(event) {
	guess2Output.innerText = guess2.value;
	guess1Output.innerText = guess1.value;
	scoreBoxName1.innerText = name1.value;
	scoreBoxName2.innerText = name2.value;
		console.log(name1.value);
		console.log(guess1.value);
		console.log(name2.value);
		console.log(guess2.value);
}


function generateRandomNumber() {
   randomNumber = Math.floor(Math.random() * 100 + 1) + 1;
   console.log(randomNumber);
}
























