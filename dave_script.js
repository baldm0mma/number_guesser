// Global Variables

var rangeUpdateButton = document.querySelector(".range-box__button");
	
	var minValueInput = document.querySelector(".range-box__form--1--input");
	
	var maxValueInput = document.querySelector(".range-box__form--2--input");
	
	var minValueOutput = document.querySelector(".guess-box__range--low");
	
	var maxValueOutput = document.querySelector(".guess-box__range--high");




var submitGuessButton = document.querySelector(".guess-box__submit");
	
	var nameOneInput = document.querySelector(".guess-box__ch1--input");
	var nameOneOutput = document.querySelector(".guess-box__ch1--name");
	
	var nameTwoInput = document.querySelector(".guess-box__ch2--input");
	var nameTwoOutput = document.querySelector(".guess-box__ch2--name");
	
	var guessOneInput = document.querySelector(".guess-box__ch1--guess");
	var guessOneOutput = document.querySelector(".score-box__display--ch1--num");
	
	
	var guessTwoInput = document.querySelector(".guess-box__ch2--guess");
	var guessTwoOutput = document.querySelector(".score-box__display--ch2--num");
	
	
	
	
	
	

// var resetGameButton = document.querySelector(".guess-box__reset");
// var clearGameButton = document.querySelector(".guess-box__clear");
// var clearWinnerCardButton = document.querySelector(".winner-card__bottom--img");

// Event Listeners

// minValue.addEventListener("click", function1());
// maxValue.addEventListener("click", function2());
// nameOne.addEventListener("click", function3());
// guessOne.addEventListener("click", function4());
// nameTwo.addEventListener("click", function5());
// guessTwo.addEventListener("click", function6());

rangeUpdateButton.addEventListener("click", updateRange);

submitGuessButton.addEventListener("click", updateNameGuess);
// resetGameButton.addEventListener("click", function9());
// clearGameButton.addEventListener("click", function10());
// clearWinnerCardButton.addEventListener("click", function11());

// Update range function

function updateRange(event) {
	event.preventDefault();
	minValueOutput.innerText = minValueInput.value;
	maxValueOutput.innerText = maxValueInput.value;
		console.log(minValueInput.value);
		console.log(maxValueInput.value);
}

function updateNameGuess(event) {
	event.preventDefault();
	nameOneOutput.innerText = nameOneInput.value;
	guessOneOutput.innerText = guessOneInput.value;
	nameTwoOutput.innerText = nameTwoInput.value;
	guessTwoOutput.innerText = guessTwoInput.value;
		console.log(nameOneInput.value);
		console.log(guessOneInput.value);
		console.log(nameTwoInput.value);
		console.log(guessTwoInput.value);
}

// Random number generator

// function generateRandomNumer();

// var randomNumber = Math.floor(Math.random() * 10 + 1);