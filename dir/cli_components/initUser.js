import { input, confirm } from '@inquirer/prompts';
import User from '../models/userClass.js';

const attemptUser = async () => {
	const nameInput = await input(
		{
			message: 'Hello there vagrant... What do they call you??',
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
	let userAttemptObject;

	while (true) {
		userAttemptObject = await attemptUser();

		if (userAttemptObject.userConfirmed) {
			const user = new User(userAttemptObject.userName)
			user.pushAction(userAttemptObject);

			return user;
		}

		console.log('Hmmm... Let us try again then....')
	};
};
