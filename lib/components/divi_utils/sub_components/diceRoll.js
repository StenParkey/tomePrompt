import { select, number, Separator } from '@inquirer/prompts';
// Model Imports
import diceBoxObject from '../../../models/diceBoxObject.js';

export default async function diceRoll(user) {
	const diceInput = await select({
		message: `Welcome ${user.userName}.. to diceRoll. Select a dice to roll...`,
		choices: [
			new Separator(),

			{
				name: 'd8',
				value: 4,
				description: 'A four sided die..'
			},

			{
				name: 'd6',
				value: 6,
				description: 'The standard six sided die.'
			},

			{
				name: 'd8',
				value: 8,
				description: 'An eight sided die..'
			},

			{
				name: 'd10',
				value: 10,
				description: 'A ten sided die, the same found within eightBall...'
			},

			{
				name: 'd12',
				value: 12,
				description: 'A twelve sided die..'
			},

			{
				name: 'd20',
				value: 20,
				description: 'The infamous twenty sided die, favored amongst role players...'
			},

			{
				name: 'd100',
				value: 100,
				description: 'The largest die, One hundred sides....'
			}
		]
	});

	const rollAmount = number({
		message: `Ahhh.. the d${diceInput}... and how many would you like to roll?`
	});


	const resultsObject = {
		diceSelection: diceInput,
		amountRolled: rollAmount,
		rollResults: diceBoxObject.rollDice(diceSelection, rollAmount)
	};
};
