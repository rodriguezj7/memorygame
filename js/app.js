/*
 * Create a list that holds all of your cards
 */
let openList = [];
const deck = document.getElementById("deck");
var allCards = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor','fa fa-bolt','fa fa-cube', 'fa fa-anchor', 'fa fa-leaf','fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf',
'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o','fa fa-cube'];
var scoreCount = document.getElementsByClassName("score-panel");
var starScore = '<li><i class="fa fa-star"></i></li>';
var repeat = document.getElementById("restart");
let flippedCards = [];
let matchedCards = 0;
//build card
var cardInfo = function(index, array){
	for(let x = 0; x < index; x++){
	let cardHTML = document.createElement("li");
	let cardType = document.createElement('i')
	deck.appendChild(cardHTML);
	cardHTML.setAttribute("class", "card");
	cardHTML.appendChild(cardType);
	cardType.setAttribute("class", array[x]);
	}
 }
 cardInfo.prototype.methods ={
 	showCard : function(event){
 	let flip =  event.target.setAttribute("class", "card open show");
 	let currentCard = event.target.children[0];
	currentCard = currentCard.getAttribute('class');
	return currentCard;
	},
	addToList: function(target){
	let card = target.firstChild.getAttribute("class");
	flippedCards.push(card);
	},
	matchCard: function(event){
	let match =  event.target.setAttribute("class", "card match");
	return match;
	}
 };
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// repeat game or restart
repeat.addEventListener("click", function(){
	openList =[];
	//new shuffle
	let newShuffle = shuffle(allCards);
	newBoard(16, newShuffle);
	console.log(newShuffle);
	console.log("Success!");
});

// Create new board
function newBoard(cards, array){
	//clear board
	var firstNode = deck.firstChild;
	while(firstNode){
		deck.removeChild(firstNode);
		firstNode = deck.firstChild;
	}
	//call and build new cards
	let newGame = new cardInfo(cards, array);
}

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
deck.addEventListener("click", function(e){
    let target = e.target; // Clicked element
    targetChild = target.children[0].getAttribute("class");

	if(target.tagName === 'LI'){
		cardInfo.prototype.methods.showCard(e);
		cardInfo.prototype.methods.addToList(target);
		console.log(target.firstChild.getAttribute("class"));
		console.log(flippedCards);
	}
	// console.log(target);
	// console.log(targetChild);
	// console.log(flippedCards);
	// console.log('target:', event.target.getAttribute('class'));
});


