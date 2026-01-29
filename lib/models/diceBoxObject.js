const diceBox = {
	_diceTypes: [4, 6, 8, 10, 12, 20, 100],

	get diceTypes() {
		return this._diceTypes;
	},

	rollDice(diceSelection, amountOfRolls) {
		if (this.diceTypes.includes(diceSelection) && Number.isInteger(amountOfRolls) && amountOfRolls > 0) {
			if (amountOfRolls > 1) {
				const rollsArray = [];
				for (let i = 0; i < amountOfRolls; i++) {
					const diceRoll = Math.floor(Math.random() * diceSelection) + 1;
					rollsArray.push(diceRoll);
				};
				return rollsArray;
			} else {
				return Math.floor(Math.random() * diceSelection) + 1;
			};
		} else {
			throw new Error(`Error! Invalid Dice Type or Roll amount!  You input diceSelection:${diceSelection}type:${typeof diceSelection} rollAmount:${amountOfRolls}type:${typeof amountOfRolls}`)
		};
	}
};

export default diceBox;
