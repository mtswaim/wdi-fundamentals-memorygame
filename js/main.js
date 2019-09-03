
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry,try again.");
	}
}
function flipCard(cardId) {
	console.log("User Flipped Queen");
	console.log("User Flipped King");
	checkForMatch()
		if (cardsInPlay.length===2) {
			if(cardOne === cardTwo) {
				alert("You found a match!");
					} else {
		 ("Sorry, try again")
		 console.log("User Flipped" + cards[cardId])
		 cardsInPlay.push(cards[cardId])
		}
	}
}
flipCard(0);
