#Number Guesser

This project is designed to be a number guessing game played by 2 challengers. A random number is generated on page load, then the 2 players enter name and guess inputs to attempt to guess the randomly generated number.

##Breakdown

At desktop size, there are initially 2 columns; the left column contains the gameboard, and the right column is empty, and will be populated with a winner card on win. In the game board, there is a card area option for players to enter in their own guessing range, but the default is 1, for the low, and 100 for the high.

Below the range card mentioned above exists the guessing card. This card is where the 2 players enter their names and guesses. If players attempt to enter inputs that are outside of the assigned ranges, warnings will be given, and players will need to enter valid inputs.

Then, below the guessing card is the score card area. In this card, the players names, guesses, and a hint as to whether the guesses are too high or two low will be populated. Upon a correct guess, a winner card will then populate the right hand column with the player's names, the winner's name, and the total amount of guesses it took to guess the random number.

Winner cards, after insetion into the column, will continue to populate on each win, one above the other, until they are individually deleted from the screen - through a delete button located on the lower right side of each card.

There are 3 Media Queries that assist in the transition from a large to smaller mobile viewport - one at 1030px, one at 900px, and one at 425px. At 1030px only texts and input sizes are adjusted minorly. At 900px, the two columns snap into one single column, and button, input, and text sizes are adjusted. And at 425px, buttons become columned, button, input and text sizes are adjusted, and the general layout is manipulated to fit a small screen (320px).

##Getting Started

Just clone the repo into a local directory, and you're ready to play and tinker with the code.

##Static Comp Screenshot

![desktop view](https://github.com/baldm0mma/number_guesser/blob/master/images/number_guesser_static_comp1.jpg)
![mobile view](https://github.com/baldm0mma/number_guesser/blob/master/images/number_guesser_static_comp2.jpg)

Authors
David Engel and Jev Forsberg