/*
 * Create a list that holds all of your cards
 */
const deck = $(".deck");
var allCards = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor','fa fa-bolt','fa fa-cube', 'fa fa-anchor', 'fa fa-leaf','fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf',
'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o','fa fa-cube'];
var repeat = $(".restart");
let score = $(".stars");
let star = '<li><i class="fa fa-star"></i></li>';
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
	flippedCards.length = 0;
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

function gameWin(){
	if(matchedCards == 8){
		console.log("You won!");
	}

}
//matching cards
function cardsMatch(card){
	let target = $(card);
	if(flippedCards.length > 1){
		$(flippedCards[0]).addClass(" notmatch");
		$(flippedCards[1]).addClass(" notmatch");
	} else if((flippedCards[0].innerHTML) === (flippedCards[1].innerHTML)){
		$(flippedCards[0]).addClass(" match").removeClass("notmatch");
		$(flippedCards[1]).addClass(" match").removeClass("notmatch");
		matchedCards++;
		flippedCards.length = 0;
	}else{
		flippedCards.length = 0;
	}

}
//cards do not match
function noMatch(){
	flippedCards.length = 0;
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
	let currentTarget = $(card);
	currentTarget.addClass("show open");
	currentTarget.css("pointer-events", "none");
}

//add to List
function addCard(card){
	flippedCards.push(card);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


$(document).on("click", ".card", function(){
	let target = this;
	console.log(target);
	//display card
	displayCard(target);
	addCard(target);
	if(flippedCards.length < 3){
		cardsMatch(target);
	} else {
		noMatch();
	}
	gameRating();

});

if(flippedCards[0] == flippedCards[1]){ console.log("true"); } else { console.log("not true"); }
	// displayCard(currentTarget);
	// if (currentTarget.hasClass('.card') || currentTarget.hasClass('open show')) {
 //           console.log((currentTarget).attr("class"));
 //           displayCard();
 //         } else {
 //            return;
 //         };

// deck.addEventListener("click", function(e){
//     let target = e.target; // Clicked element
//     targetChild = target.children[0].getAttribute("class");

// 	if(target.tagName === 'LI'){
// 		cardInfo.prototype.methods.showCard(e);
// 		cardInfo.prototype.methods.addToList(target);
// 		console.log(target.firstChild.getAttribute("class"));
// 		console.log(flippedCards);
// 	}
	// console.log(target);
	// console.log(targetChild);
	// console.log(flippedCards);
	// console.log('target:', event.target.getAttribute('class'));
// });


