import { select, Separator } from '@inquirer/prompts';
// Sub Components
import tarotCard from './sub_components/tarotCard.js';

const menu = async (user) => {
	const menuSelection = await select({
		message: `Welcome to diviUtils ${user.userName}.. Divine the answers you seek...`,
		choices: [
			new Separator(),

			{
				name: 'coinFlip',
				value: 'coin',
				description: 'Heads or Tails....'
			},

			{
				name: 'eightBall',
				value: 'ball',
				description: 'Provide your query to the eightBall..'
			},

			{
				name: 'diceRoll',
				value: 'dice',
				description: 'Roll the dice...'
			},

			{
				name: 'tarotCard',
				value: 'tarot',
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
		case 'coin':
			// coin flip sub app
			break;
		case 'ball':
		// magic 8 ball sub app
		case 'dice':
			// dice roll sub app
			break;
		case 'tarot':
			const tarotAppSession = await tarotCard(user)
			break;
		case 'quit':
			// handle quit 
			break;
	};

	user.pushAction(utilSelectionObject);
};
