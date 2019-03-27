var clearGameButton = document.querySelector('.guess-box__clear');
var guess1 = document.querySelector('.guess-box__ch1--guess');
var guess1Output = document.querySelector('.score-box__display--ch1--num');
var guess2 = document.querySelector('.guess-box__ch2--guess');
var guess2Output = document.querySelector('.score-box__display--ch2--num');
var guessTotal = 1;
var maxValueInput = document.querySelector('.range-box__form--2--input');
var maxValueOutput = document.querySelector('.guess-box__range--high');
var minValueInput = document.querySelector('.range-box__form--1--input');
var minValueOutput = document.querySelector('.guess-box__range--low');
var name1 = document.querySelector('.guess-box__ch1--input');
var name2 = document.querySelector('.guess-box__ch2--input');
var rangeUpdateButton = document.querySelector('.range-box__button');
var resetGameButton = document.querySelector('.guess-box__reset');
var rightSide = document.querySelector('.content__right');
var scoreBoxName1 = document.querySelector('.score-box__display--ch1--name')
var scoreBoxName2 = document.querySelector('.score-box__display--ch2--name')
var submitGuessButton = document.querySelector('.guess-box__submit');
var tooHilo1 = document.querySelector('.score-box__display--ch1--hilo');
var tooHilo2 = document.querySelector('.score-box__display--ch2--hilo');
var winNum = generateRandomNumber();

clearGameButton.addEventListener('click', clearGame);
guess1.addEventListener('keyup', checkGuessFields);
guess1.addEventListener('keyup', enableResetClear);
guess2.addEventListener('keyup', checkGuessFields);
guess2.addEventListener('keyup', enableResetClear);
maxValueInput.addEventListener('keyup', checkRangeFields);
minValueInput.addEventListener('keyup', checkRangeFields);
name1.addEventListener('keyup', enableResetClear);
name2.addEventListener('keyup', enableResetClear);
rangeUpdateButton.addEventListener('click', updateRange);
resetGameButton.addEventListener('click', resetFields);
rightSide.addEventListener('click', deleteCardEvent);
submitGuessButton.addEventListener('click', submitButtonFunctions);

function checkNameInput1() {
	if (name1.value === '') {
		name1.classList.add('input-error');
		alert('Please enter a name.');
	} else {
		name1.classList.remove('input-error');
	}
}

function checkNameInput2() {
	if (name2.value === '') {
		name2.classList.add('input-error');
		alert('Please enter a name.');
	} else {
		name2.classList.remove('input-error');
	}
}

function submitButtonFunctions(event) {
	event.preventDefault();
	updateNameGuess();
	checkInputRange1();
	checkInputRange2();
	checkNameInput1();
	checkNameInput2();
	guessDisplayBox();
	addGuess();
}

function checkGuessFields(e) {
	if (guess1.value && guess2.value !== '') {
		submitGuessButton.disabled = false;
		submitGuessButton.classList.add('enable');
	} else {
		submitGuessButton.disabled = true;
		submitGuessButton.classList.remove('enable');
	}
} 

function checkRangeFields(e) {
	if (minValueInput.value && maxValueInput.value !== '') {
		rangeUpdateButton.disabled = false;
		rangeUpdateButton.classList.add('enable');
	} else {
		rangeUpdateButton.disabled = true;
		rangeUpdateButton.classList.remove('enable');
	}
}

function enableResetClear(e) {
	if (name1.value && name2.value && guess1.value && guess2.value !== '') {
		resetGameButton.disabled = false;
		clearGameButton.disabled = false;
		resetGameButton.classList.add('enable');
		clearGameButton.classList.add('enable');
	} else {
		resetGameButton.disabled = true;
		clearGameButton.disabled = true;
		resetGameButton.classList.remove('enable');
		clearGameButton.classList.remove('enable');
	}
}

function disableButtonsOnClick() {
	submitGuessButton.disabled = true;
	submitGuessButton.classList.remove('enable');
	resetGameButton.disabled = true;
	resetGameButton.classList.remove('enable');
	clearGameButton.disabled = true;
	clearGameButton.classList.remove('enable');
	rangeUpdateButton.disabled = true;
	rangeUpdateButton.classList.remove('enable');
}

function updateRange(event) {
	minValueOutput.innerText = minValueInput.value;
	maxValueOutput.innerText = maxValueInput.value;
		winNum = generateRandomNumber();
		console.log(winNum);
}

function updateNameGuess(event) {
	guess2Output.innerText = guess2.value;
	guess1Output.innerText = guess1.value;
	scoreBoxName1.innerText = name1.value;
	scoreBoxName2.innerText = name2.value;
}

function valueReset() {
	var inputs = document.getElementsByClassName('guess-box__forms');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].reset();
	}
}

function borderErrorClear() {
	guess1.classList.remove('input-error');
	guess2.classList.remove('input-error');
	name1.classList.remove('input-error');
	name2.classList.remove('input-error');
}

function resetFields() {
	valueReset();
	guess2Output.innerText = '?';
	guess1Output.innerText = '?';
	scoreBoxName1.innerText = 'Challenger 1';
	scoreBoxName2.innerText = 'Challenger 2';
	tooHilo1.innerText = 'How close is your guess?';
	tooHilo2.innerText = 'How close is your guess?';
	borderErrorClear();
	disableButtonsOnClick();
}

function clearGame(event) {
	valueReset();
	guess1Output.innerText = '?';
	guess2Output.innerText = '?';
	maxValueInput.value = '';
	maxValueOutput.innerText = '100';
	minValueInput.value = '';
	minValueOutput.innerText = '1';
	scoreBoxName1.innerText = 'Challenger 1';
	scoreBoxName2.innerText = 'Challenger 2';
	tooHilo1.innerText = 'How close is your guess?';
	tooHilo2.innerText = 'How close is your guess?';
	disableButtonsOnClick();
	borderErrorClear();
	guessTotal = 0;
	winNum = generateRandomNumber();
	console.log(winNum);
}

function generateRandomNumber() {
   var min = parseInt(minValueInput.value) || 1;
   var max = parseInt(maxValueInput.value) || 100;
   return Math.floor(Math.random() * (max - min +1)) + min;
}
console.log(winNum);

function checkInputRange1() {
  var lowRange = parseInt(minValueInput.value) || 1;
  var highRange = parseInt(maxValueInput.value) || 100;
  if (guess1.value > highRange || guess1.value < lowRange) {
		guess1.classList.add('input-error');
	alert('Please enter a number in the correct range');
	} else {
		guess1.classList.remove('input-error'); 
	}
}

function checkInputRange2() {
  var lowRange = parseInt(minValueInput.value) || 1;
  var highRange = parseInt(maxValueInput.value) || 100;
	if (guess2.value > highRange || guess2.value < lowRange) {
		guess2.classList.add('input-error');
		alert('Please enter a number in the correct range');
	} else {
		guess2.classList.remove('input-error');

	}
}

function addGuess() {
	guessTotal += 1;
}

function guessDisplayBox(event) {
		if (guess1.value > winNum) {
			tooHilo1.innerText = 'That\'s too high!';
		} else if (guess1.value < winNum) {
			tooHilo1.innerText = 'That\'s too low!';
		} else {
			tooHilo1.innerText = 'BOOM!';
			winner1();
		} if (guess2.value > winNum) {
			tooHilo2.innerText = 'That\'s too high!';
		} else if (guess2.value < winNum) {
			tooHilo2.innerText = 'That\'s too low!';
		} else {
			tooHilo2.innerText = 'BOOM!';
			winner2();
		}
}

function winner1() {
	var column = document.querySelector('.content__right');
	var winnerCard = 
		`<div class="winner-card">
			<div class="winner-card__top">
				<p class="winner-card__top--ch1 winner-card--name">${name1.value}</p>
				<p class="winner-card__top--vs">vs</p>
				<p class="winner-card__top--ch2 winner-card--name">${name2.value}</p>
			</div>
			<div class="winner-card__mid">
				<p class="winner-card__mid--name winner-card--name">${name1.value}</p>
				<p class="winner-card__mid--win">Winner</p>
			</div>
			<div class="winner-card__bottom">
				<p class="winner-card__bottom--guesses"><span class="bold">${guessTotal}</span> guesses</p>
				<p class="winner-card__bottom--time">X Minues</p>
				<img class="winner-card__bottom--img delete-btn" src="images/close_button.png" alt="remove_button">
			</div>
		</div>`;
	column.insertAdjacentHTML('afterbegin', winnerCard);
}

function winner2() {
	var column = document.querySelector(".content__right");
	var winnerCard = 
		`<div class="winner-card">
			<div class="winner-card__top">
				<p class="winner-card__top--ch1 winner-card--name">${name1.value}</p>
				<p class="winner-card__top--vs">vs</p>
				<p class="winner-card__top--ch2 winner-card--name">${name2.value}</p>
			</div>
			<div class="winner-card__mid">
				<p class="winner-card__mid--name winner-card--name">${name2.value}</p>
				<p class="winner-card__mid--win">Winner</p>
			</div>
			<div class="winner-card__bottom">
				<p class="winner-card__bottom--guesses"><span class="bold">${guessTotal}</span> guesses</p>
				<p class="winner-card__bottom--time">X Minues</p>
				<img class="winner-card__bottom--img delete-btn" src="images/close_button.png" alt="remove_button">
			</div>
		</div>`;
	column.insertAdjacentHTML('afterbegin', winnerCard);
}

function deleteCardEvent(event) {
	if(event.target.className.includes('delete-btn')) {
		event.target.parentElement.parentElement.remove();
	}
}













