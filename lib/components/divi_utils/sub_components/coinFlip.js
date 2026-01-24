import { rawlist, Separator } from '@inquirer/prompts';

export default async function coinFlip(user) {
	const sideSelection = await rawlist(
		{
			message: `Welcome ${user.userName}.. To coinFlip..\nWhich side do you choose??`,
			choices: [
				new Separator(),

				{
					name: 'Heads',
					value: 1
				},

				{
					name: 'Tails',
					value: 0
				}
			]
		}
	);

	// Again, Ill pass out some sort of action object to the playerActions array
	return;
};
