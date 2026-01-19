import { select, Separator } from '@inquirer/prompts';

const initMainMenu = async () => {

}

export default async function mainMenu(user) {
	await initMainMenu();

	const menuSelection = await select(
		{
			message: `Welcome... ${user.userName}.. to tomePrompt... `,
			choices: [
				new Separator(),

				{
					name: 'divinationUtils',
					value: 'diviutils',
					description: 'Digitized Divination Tools. Includes Tarot, Dice, Coin Flip, and more...'
				},

				{
					name: 'spellBook',
					value: 'spellbook',
					description: 'Virtual Spell Codex. Read with care....'
				},

				{
					name: 'battleSim',
					value: 'battlesim',
					description: 'Simulated Combat. Utilize various arms and incantations..'
				},

				{
					name: 'arMori',
					value: 'armory',
					description: 'Artifact Database. Stores all manner of Weapons, Armors, Trinkets, and Oddities....'
				},

				{
					name: 'loreDex',
					value: 'loredex',
					description: 'Index for Decrypted Lore. Study at your leisure..'
				}
			]
		}
	);



};
