import { input, select, confirm, Separator } from '@inquirer/prompts';
import tarotDeck from '../../../models/tarotDeckObject.js';

const interfaceObject = {
	// Methods
	tarotMenuPrompt(user) {
		return {
			message: `Welcome to tarotCard ${user.userName}..\nWould you like to pull cards? Or simply inspect their artwork?`,
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
	},

	deckChoicePrompt(user) {
		return {
			message: `Very well ${user.userName}.. Which deck would you like to inspect?`,
			choices: [
				new Separator(),

				{
					name: 'fullDeck',
					value: 'full'
				},

				{
					name: 'majorArcana',
					value: 'major',
				},

				{
					name: 'minorArcana',
					value: 'minor',
				},

				{
					name: 'cancel',
					value: 'back',
				}
			]
		}
	},

	addDescriptions(user, menuSelection) {
		const prompt = this.deckChoicePrompt(user);

		const descriptions = menuSelection === 'use'
			? this.useDeckDescriptions
			: this.inspectDeckDescriptions;

		prompt.choices.slice(1).forEach(choice => {
			choice.description = descriptions[choice.value];
		});

		return prompt;
	},

	_useDeckDescriptions: {
		full: 'Pull from combined Major and Minor Arcana...',
		major: 'Divine broader messages from the Major Arcana...',
		minor: 'Scry simpler messages from the Minor Arcana...',
		back: 'Cancel divination process..'
	},

	// best protect ya neck kid
	_inspectDeckDescriptions: {
		full: 'Inspect the Full Deck of Tarot..',
		major: 'Inspect only the Major Arcana...',
		minor: 'Inspect only the Minor Arcana...',
		back: 'Cancel the inspect proccess'
	},

	_spreadChoicePrompt: {
		message: 'I see... What spread would you like to pull?',
		choices: [
			new Separator(),

			{
				name: '1 Card',
				value: 1,
				description: 'A single card, potentially many meanings...'
			},

			{
				name: '3 Card',
				value: 3,
				description: 'A three card message, typically consisting of past, present, and future...'
			},

			{
				name: "Witch's Cross",
				value: 9,
				description: 'A nine card spread, providing a more detailed message for a given question...'
			},

			{
				name: 'A Tarot Story',
				value: 'all',
				description: 'A robust reading, utilizing every single card to describe a story or narrative..'
			}
		]
	},

	// Getters
	get spreadChoicePrompt() {
		return this._spreadChoicePrompt;
	},

	get useDeckDescriptions() {
		return this._useDeckDescriptions;
	},

	get inspectDeckDescriptions() {
		return this._inspectDeckDescriptions;
	}
};

export default async function tarotCard(user) {
	const menuChoice = await select(interfaceObject.tarotMenuPrompt(user));

	switch (menuChoice) {
		case 'use':
			const useDeckPrompt = interfaceObject.addDescriptions(user, 'use');
			const deckChoice = await select(useDeckPrompt);

			const spreadChoice = await select(interfaceObject.spreadChoicePrompt);

			tarotDeck.pullSpread(spreadChoice, deckChoice);
			break;

		case 'inspect':
			const inspectDeckPrompt = interfaceObject.addDescriptions(user, 'inspect');
			const inspectChoice = await select(inspectDeckPrompt);

			// Handle Inspect
			break;

		case 'back':
			// Return back to main menu
			break;
	};
};
