// Array for cards
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

// Array for cards in play

var cardsInPlay = [];

var checkForMatch = function () {

	// Do the selected cards match?

		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!"); 
	  } else {
			alert("Sorry, try again.");
	  }
};


var flipCard = function () {

		cardID = this.getAttribute('data-id');
		console.log(cardID);

		// Add card to cardsInPlay array
		cardsInPlay.push(cards[cardID].rank);

		// Display card image
		this.setAttribute('src', cards[cardID].cardImage);
		
		// Display card image in console
		console.log(cards[cardID].cardImage);
		
		// Display card suit in console
		console.log(cards[cardID].suit);
		
		// See if two cards have been played
		if (cardsInPlay.length === 2) {
				checkForMatch();


				cardsInPlay =[];
		}
};

//Creates the board for the game
var createBoard = function() {

		for(i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('img');
			
			cardElement.setAttribute('src',"images/back.png");
			cardElement.setAttribute('data-id', i);
			
			// Adding an event listener to perform a function when clicked
			cardElement.addEventListener('click', flipCard);

			// Now the card has be displayed on the board
			document.getElementById('game-board').appendChild(cardElement);
		
		}
};

// Create the game board
createBoard();