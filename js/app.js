"use strict";
/*
 * Create a list that holds all of your cards
 */
const deck = $(".deck");
var cardCounter = 0;
var allCards = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor','fa fa-bolt','fa fa-cube', 'fa fa-anchor', 'fa fa-leaf','fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf',
'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o','fa fa-cube'];
var repeat = $(".restart");
let score = $(".stars");
let star = '<li><i class="fa fa-star"></i></li>';
let movesEl = $(".moves");
let flippedCards = [];
let matchedCards = 0;
let movesMade = 0;
let currentTarget;
let cardOne;
let cardTwo;
//build card
var cardInfo = function(){
	let newShuffle = shuffle(allCards);
	newShuffle.forEach(function(classCard) {
	let card = '<li class="card"><i class="' + classCard + '"></i></li>'; // creates a html for adding the cards to the class deck
	  deck.append(card); // adds the card to the html class deck
	 });
	console.log(newShuffle);
 }
// Create new board
function newBoard(cards, array){
	//clear board
	 $('.deck').empty();
	//call and build new cards
	let newGame = new cardInfo();
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
	//new shuffle
	newBoard();
	movesMade = 0;
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

function winnerChickenDinner(){
	if(matchedCards === 8){
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
function displayCard(card){
	let $currentTarget = $(card);
	$currentTarget.addClass("show open").css("pointer-events", "none");
}

//add to List
function addCard(card){
	flippedCards.push(card);
}


 // * set up the event listener for a card. If a card is clicked:
 // *  - display the card's symbol (put this functionality in another function that you call from this one)
 // *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 // *  - if the list already has another card, check to see if the two cards match
 // *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 function cardMatch(){
		matchedCards++;
		$(flippedCards).slice(0, 2).addClass('match').removeClass('notmatch');
		flippedCards.length = 0;
 }
 // *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 function noMatch(){
 		$(flippedCards).slice(0, 2).removeClass('show open notmatch');

 }
 // *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 // *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)



$(document).on("click", "li", function(){
	console.log(this);
	//display card
	displayCard(this);
	addCard(this);
	console.log(flippedCards.length);
	//check if more than 1 card is in the array
	if(flippedCards.length > 1){
		//check if there are exactly 2 cards in the array
		 if(flippedCards.length === 2){
		 	//if both those cards are equal run the function inside
			if(flippedCards[0].innerHTML === flippedCards[1].innerHTML){
			cardMatch();
			} else{
			//else put notmatch class
			$(flippedCards).slice(0, 2).addClass('notmatch');
			//confirm both have this class and run function
			if($(this).hasClass('notmatch') || $(this).hasClass('show open')){
			//run this function
			noMatch();
			flippedCards.length = 0;
			}
			}
	} else{
		//just display the current card
		displayCard(this);
	}
}
	movesMade++;
	winnerChickenDinner();
});



