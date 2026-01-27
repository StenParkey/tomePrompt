import { select, Separator } from '@inquirer/prompts';
// Model Imports
import coinObject from '../../../models/coinObject.js';

export default async function coinFlip(user) {
	const sideSelection = await select({
		message: `Welcome ${user.userName}.. To coinFlip..\nWhich side do you choose??`,
		choices: [
			new Separator(),

			{
				name: 'Heads',
				value: 'heads',
				description: `Heads.. It's digitized surface appears slightly shiny...`
			},

			{
				name: 'Tails',
				value: 'tails',
				description: `Tails... This side's surface feels depricated and tarnished`
			},

			{
				name: 'Cancel',
				value: 'quit',
				description: 'Cancel coin flipping..'

			}
		]
	});

	const resultsObject = {
		choice: sideSelection,
		result: coinObject.flipCoin(sideSelection) ? 'Success' : 'Failure'
	};

	switch (resultsObject.result) {
		case 'Success':
			console.log(`Ha.. ${resultsObject.result}... You guessed correctly ${user.userName}.`)
			break;
		case 'Failure':
			console.log(`Hm.. ${resultsObject.result}... You guessed incorrectly ${user.userName}..`)
			break;
	};

	return resultsObject;
};
