import { select, Separator } from '@inquirer/prompts';

const menu = async (user) => {
	const menuSelection = await select({
		message: `Welcome to diviUtils ${user.userName}.. Divine the answers you seek...`,
		choices: [
			new Separator(),

			{
				name: 'coinFlip',
				value: 'coin',
				description: ''
			},

			{
				name: 'diceRoll',
				value: 'dice',
				description: ''
			},

			{
				name: 'tarotCard',
				value: 'tarot',
				description: 'Divine a message from the tarot'
			},

			{
				name: 'goBack',
				value: 'back',
				description: 'Return to main menu.'
			}
		]
	});

	return {
		userAction: 'diviUtils menu selection',
		selection: menuSelection

	};
};

export default async function diviUtils(user) {
	const utilSelectionObject = await menu(user);

	switch (utilSelectionObject.selection) {
		case 'coin':
			// handle coinFlip
			break;
		case 'dice':
			// handle diceRoll
			break;
		case 'tarot':
			// handle tarotDeck
			break;
		case 'back':
			// handle goBack
			break;
	};

	user.pushAction(utilSelectionObject);
};
