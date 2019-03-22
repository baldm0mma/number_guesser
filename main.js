

var guess1 = document.querySelector(".guess-box__ch1--guess");
var guess1Output = document.querySelector(".score-box__display--ch1--num");
var guess2 = document.querySelector(".guess-box__ch2--guess");
var guess2Output = document.querySelector(".score-box__display--ch2--num");
var maxValueInput = document.querySelector(".range-box__form--2--input");
var maxValueOutput = document.querySelector(".guess-box__range--high");
var minValueInput = document.querySelector(".range-box__form--1--input");
var minValueOutput = document.querySelector(".guess-box__range--low");
var name1 = document.querySelector(".guess-box__ch1--input");
var name2 = document.querySelector(".guess-box__ch2--input");
var scoreBoxName1 = document.querySelector(".score-box__display--ch1--name")
var scoreBoxName2 = document.querySelector(".score-box__display--ch2--name")
var tooHilo1 = document.querySelector(".score-box__display--ch1--hilo");
var tooHilo2 = document.querySelector(".score-box__display--ch2--hilo");

var winNum = generateRandomNumber();
console.log(winNum);

var submitGuessButton = document.querySelector(".guess-box__submit");
var rangeUpdateButton = document.querySelector(".range-box__button");
var resetGameButton = document.querySelector(".guess-box__reset");
var clearGameButton = document.querySelector(".guess-box__clear");




rangeUpdateButton.addEventListener("click", updateRange);
submitGuessButton.addEventListener("click", updateNameGuess);
clearGameButton.addEventListener("click", clearGame);
resetGameButton.addEventListener("click", resetFields);


guess1.addEventListener("keyup", checkGuessFields);
guess2.addEventListener("keyup", checkGuessFields);

function checkGuessFields(e) {
	if (guess1.value && guess2.value === '') {
		submitGuessButton.disabled = true;
	} else {
		submitGuessButton.disabled = false;
	}
} 

function generateRandomNumber() {
   var min = parseInt(minValueInput.value) || 1;
   var max = parseInt(maxValueInput.value) || 100;
   return Math.floor(Math.random() * (max - min +1)) + min;
}

submitGuessButton.addEventListener('click', function(event) {
	event.preventDefault();
		if (guess1.value > randomNumber) {
			tooHilo1.innerText = 'That\'s too high!';
		} else if (guess1.value < randomNumber) {
			tooHilo1.innerText = 'That\'s too low!';
		} else {
			tooHilo1.innerText = "BOOM!";
		} if (guess2.value > randomNumber) {
			tooHilo2.innerText = 'That\'s too high!';
		} else if (guess2.value < randomNumber) {
			tooHilo2.innerText = 'That\'s too low!';
		} else {
			tooHilo2.innerText = "BOOM!";
		}
});







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
	event.preventDefault();
	guess1.value = "";
	guess1Output.innerText = "?";
	guess2.value = "";
	guess2Output.innerText = "?";
	maxValueInput.value = "";
	maxValueOutput.innerText = "100";
	minValueInput.value = "";
	minValueOutput.innerText = "1";
	name1.value = "";
	name2.value = "";
	scoreBoxName1.innerText = "Challenger 1";
	scoreBoxName2.innerText = "Challenger 2";
		winNum = generateRandomNumber();
		console.log(winNum);
}

function updateRange(event) {
	event.preventDefault();
	minValueOutput.innerText = minValueInput.value;
	maxValueOutput.innerText = maxValueInput.value;
		winNum = generateRandomNumber();
		console.log(winNum);
		// console.log(minValueInput.value);
		// console.log(maxValueInput.value);
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

























