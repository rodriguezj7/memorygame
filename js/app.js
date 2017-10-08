"use strict";
/*
 * Create a list that holds all of your cards
 */
//grabbing deck ul element
const deck = $(".deck");
//counter to keep track of how many cards are clicked
var cardCounter = 0;
//array of cards
var allCards = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor','fa fa-bolt','fa fa-cube', 'fa fa-anchor', 'fa fa-leaf','fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf',
'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o','fa fa-cube'];
var repeat = $(".restart");
let score = $(".stars");
//star element
let star = '<li><i class="fa fa-star"></i></li>';
//moves made 
let movesEl = $(".moves");
//array for storing and comparing cards
let flippedCards = [];
// matched cards variable to evaluate total pairs
let matchedCards = 0;
//moves made counter
let movesMade = 0;
//currentTarget variable to be adjusted
let cardOne;
let cardTwo;

//build card
var cardInfo = function(){
	//shuffle array and store in newShuffle
	let newShuffle = shuffle(allCards);
	//go through the array and store li elements in card variable while appending to the deck element
	newShuffle.forEach(function(classCard) {
	let card = '<li class="card"><i class="' + classCard + '"></i></li>'; // creates a html for adding the cards to the class deck
	  deck.append(card); // adds the card to the html class deck
	 });
	//log array for each new instance that repeat is clicked
	console.log(newShuffle);
 }
// Create new board
function newBoard(cards, array){
	//clear board
	 $('.deck').empty();
	//call and build new cards
	let newGame = new cardInfo();
	//set array length to zero just incase there is anything in the array
	flippedCards.length = 0;
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// repeat game or restart
repeat.click(function(){
	//call new board function
	newBoard();
	// reset moves made to 0
	movesMade = 0;
	//update moves element text with current counter
	movesEl.text(movesMade);
});


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// winning game function
function winnerChickenDinner(){
	//run if the game counter condition is met
	if(matchedCards === 8){
		//log that the game is won
		console.log("You won!");
	}

}

//rating
var gameRating = function(){
  if (movesMade <= 11) {
   score.append(star + star + star);
  } else if (movesMade > 11 && movesMade < 16) {
   score.append(star + star);
  } else if (movesCount >= 25) {
   score.append(star);
  }
}
//display card
function displayCard(card){
	//store parameter/argument into $currentTarget variabel as jquery object
	let $currentTarget = $(card);
	//turn the current card open and disable user from click on it
	$currentTarget.addClass("show open").css("pointer-events", "none");
}

//add to List
function addCard(card){
	//push the current card/target into the array for comparing
	flippedCards.push(card);
}


 // * set up the event listener for a card. If a card is clicked:
 // *  - display the card's symbol (put this functionality in another function that you call from this one)
 // *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 // *  - if the list already has another card, check to see if the two cards match
 // *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 function cardMatch(){
 	//if the array for comparing has more than 1 card then run this
 	if(flippedCards.length > 1){
 		//if both those cards are equal run the function inside
		if(flippedCards[0].innerHTML === flippedCards[1].innerHTML){
			//increment matchedcards counter 
			matchedCards++;
			//set both cards to matched class
			$(flippedCards).slice(0, 2).addClass('match').removeClass('notmatch');
			//reset the array to 0 
			flippedCards.length = 0;
		}else {
			// run the noMatch function if the condition is not met
			noMatch();
		}
	}
 }
 // *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 function noMatch(){
 		//remove the classes for the those li elements if they do not match
 		$('li').removeClass('show open notmatch').css("pointer-events", "all");
 }
 // *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 // *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)



$(document).on("click", "li", function(){
	console.log(this);
	//display card
	displayCard(this);
	//push card to array
	addCard(this);
	//log the current length of the array when the li element is clicked
	console.log(flippedCards.length);
	//if more than 1 card in the array proceed
	if(flippedCards.length > 1){
		//make both cards notmatch 
		$(flippedCards).slice(0, 2).addClass('notmatch');
		//if they actually do not match run this
		if(flippedCards[0].innerHTML != flippedCards[1].innerHTML){
		//this function will remove their classes turning them back over
		setTimeout(function(){noMatch(this)},500);
		//reset array
		flippedCards.length = 0;
		}else{
		//if the condition above is not true then this will run evaluating the matched cards
		cardMatch(this);
		}
	}
	movesMade++;
	winnerChickenDinner();
});
//populate grid without refresh
cardInfo();
