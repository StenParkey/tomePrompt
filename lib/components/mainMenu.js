import { select, Separator } from '@inquirer/prompts';

export default async function mainMenu(user) {
	const menuSelection = await select({
		message: `Welcome... ${user.userName}....`,
		choices: [
			new Separator(),

			{
				name: 'divinationUtils',
				value: 'diviutils',
				description: 'Digitized Divination Tools. Includes Tarot, Dice, Coin Flip, and more...'
			},

			{
				name: 'battleSim',
				value: 'battlesim',
				description: 'Simulated Combat. Utilize various arms and incantations..'
			},

			{
				name: 'arMori',
				value: 'armori',
				description: 'Artifact Database. Stores all manner of Weapons, Armors, Trinkets, and Oddities....'
			},

			{
				name: 'spellBook',
				value: 'spellbook',
				description: 'Virtual Spell Codex. Read with care....'
			},

			{
				name: 'loreDex',
				value: 'loredex',
				description: 'Index for Decrypted Lore. Study at your leisure..'
			}
		]
	});

	const menuSelectionObject = {
		userAction: 'menu selection',
		selection: menuSelection
	};
	user.pushAction(menuSelectionObject);
	return menuSelectionObject;
};
