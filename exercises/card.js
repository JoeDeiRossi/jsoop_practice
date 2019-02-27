
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.deckArray = [];
	}
	addCard(suit, faceValue){
		//adds a card to the deck

		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
		var newCard = new Card(suit, faceValue);
		this.deckArray.push(newCard);
		return this.getCardCount();
	}
	shuffle(){
		//reorders the cards in the storage array in a random order

		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		//gets the current amount of cards stored

		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
		return this.deckArray.length;
	}
	dealCards(numberOfCards){
		//deals out a number of cards

		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it,
			//in the opposite order they were added (last-in, first-out)
		//cannot return more cards than the deck has
		var newArray = [];
		while (numberOfCards > 0) {
			if (this.deckArray.length > 0) {
				var currentCard = this.deckArray.pop();
				newArray.push(currentCard);
			}
			numberOfCards--;
		}
		return newArray;
	}
}