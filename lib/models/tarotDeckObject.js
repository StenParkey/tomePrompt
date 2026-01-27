class Card {
	constructor(cardValue, cardName) {
		this.cardValue = cardValue.toString();
		this.cardName = cardName;
	}
}

const tarotDeck = {
	// Major Arcana
	_majorArcana: [
		new Card(0, 'The Fool'),
		new Card(1, 'The Magician'),
		new Card(2, 'The High Priestess'),
		new Card(3, 'The Empress'),
		new Card(4, 'The Emperor'),
		new Card(5, 'The Hierophant'),
		new Card(6, 'The Lovers'),
		new Card(7, 'The Chariot'),
		new Card(8, 'Strength'),
		new Card(9, 'The Hermit'),
		new Card(10, 'The Wheel of Fortune'),
		new Card(11, 'Justice'),
		new Card(12, 'The Hanged Man'),
		new Card(13, 'Death'),
		new Card(14, 'Temperance'),
		new Card(15, 'The Devil'),
		new Card(16, 'The Tower'),
		new Card(17, 'The Star'),
		new Card(18, 'The Moon'),
		new Card(19, 'The Sun'),
		new Card(20, 'Judgement'),
		new Card(21, 'The World')
	],

	get majorArcana() {
		return this._majorArcana;
	},

	// Minor Arcana 
	get minorArcana() {
		return this._minorArcana;
	},

	get cupsSuit() {
		return // only the cups suit from the minorArcana
	},

	get pentaclesSuit() {
		return // only the pentacles suit from the minorArcana
	},

	get swordsSuit() {
		return // only the swords suit from the minorArcana
	},

	get wandsSuit() {
		return // only the wands suit from the minorArcana
	},

	get fullDeck() {
		//combine major and minor arcana
		return;
	},

	// Methods 
	pullSpread(user, amountOfCards, deck) {

	}
};

export default tarotDeck;
