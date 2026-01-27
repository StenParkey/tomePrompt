// Coin Object currently has one method that takes a string input of either 'heads' or 'tails' and then returns a boolean based on a success or not
const coinObject = {
	flipCoin(sideSelection) {
		if (typeof sideSelection != 'string' || (sideSelection !== 'heads' && sideSelection !== 'tails')) {
			throw new Error(`Error! Invalid side selection.\nMust be type string 'heads' or 'tails'\nYou passed in ${sideSelection} type:${typeof sideSelection}`)
		} else {
			const sideChoiceNumber = sideSelection === 'heads' ? 1 : 0
			const flipNumber = Math.floor(Math.random() * 2);

			return sideChoiceNumber == flipNumber ? true : false;
		}
	}
};

export default coinObject;
