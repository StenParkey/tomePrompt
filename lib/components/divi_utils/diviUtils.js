import { select, Separator } from '@inquirer/prompts';
// Sub Components
import coinFlip from './sub_components/coinFlip.js';
import tarotDeckApp from './sub_components/tarotDeck.js';

const menu = async (user) => {
	const menuSelection = await select({
		message: `Welcome to diviUtils ${user.userName}.. Divine the answers you seek...`,
		choices: [
			new Separator(),

			{
				name: 'coinFlip',
				value: 'coinflip',
				description: 'Heads or Tails....'
			},

			{
				name: 'eightBall',
				value: '8ball',
				description: 'Provide your query to the eightBall..'
			},

			{
				name: 'diceRoll',
				value: 'diceroll',
				description: 'Roll the dice...'
			},

			{
				name: 'tarotDeck',
				value: 'tarotdeck',
				description: 'Divine a message from the tarot..'
			},

			{
				name: 'Quit',
				value: 'quit',
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
		case 'coinflip':
			const coinFlipAppSession = await coinFlip(user);
			// coin flip sub app
			break;
		case '8ball':
		// magic 8 ball sub app
		case 'diceroll':
			// dice roll sub app
			break;
		case 'tarotdeck':
			const tarotDeckAppSession = await tarotDeckApp(user);
			break;
		case 'quit':
			// handle quit 
			break;
	};

	user.pushAction(utilSelectionObject);
};
