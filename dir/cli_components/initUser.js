import { input, confirm } from '@inquirer/prompts';
import User from '../models/userClass.js';

const startUser = async () => {
	const nameInput = await input(
		{
			message: 'Welcome vagrant... What do they call you??',
			default: 'Anonymous User',
		}
	);

	const confirmUser = await confirm(
		{
			message: `I see... ${nameInput}... Is this your true self?`,
			default: false
		}
	);

	return {
		userAction: 'init user',
		userName: nameInput,
		userConfirmed: confirmUser
	};
};

export default async function initUser() {
	let userAttempt;


	while (true) {
		userAttempt = await startUser()

		if (userAttempt.userConfirmed) {
			const user = new User(userAttempt.userName)
			user.userActions.push(userAttempt);
			return user;
		}

		console.log('Hmmm... Let us try again then....')
	};
};
