import { select, number, Separator } from '@inquirer/prompts';


const tarotDeck = {
	_majorArcana: [],
	_minorArcana: [],

	get majorArcana() {
		return this._majorArcana;
	},

	get minorArcana() {
		return this._minorArcana;
	},

	get fullDeck() {
		//combine major and minor arcana
		return;
	},

	pullSpread(spread, deck) {
		//pull a specific spread based on the spread choice and the deck choice
		return;
	}
};

const initTarotCard = async (user) => {
	const initChoice = await select(
		{
			message: `Welcome to tarotCard ${user.userName}..\nWould `,
			choices: [
				new Separator(),

				{
					name: 'Use',
					value: 'use',
					description: 'Utilize the Tarot deck to scry...'
				},

				{
					name: 'Inspect',
					value: 'inspect',
					description: 'Inspect the cards at your disposal...'
				},

				{
					name: 'Exit',
					value: 'back',
					description: 'Return to the Main Menu...'
				}

			]

		}
	)

	return // another action object for the component function and for pushing to the action array.
};

export default async function tarotCard(user) {
	const spreadSelection = await select(
		{
			message: `Which deck would you like to use?`,
			choices: [
				{
					name: 'fullDeck',
					value: 'full',
					description: 'Pull from combined Major and Minor Arcana...'
				},

				{
					name: 'majorArcana',
					value: 'major',
					description: 'Divine broader messages from the Major Arcana...'
				},

				{
					name: 'minorArcana',
					value: 'minor',
					description: 'Scry simpler messages from the Minor Arcana...'
				},

				{
					name: 'cancel',
					value: 'back',
					description: 'Cancel divination process..'
				}
			]
		}
	)
};
