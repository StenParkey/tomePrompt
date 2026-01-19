import { input, confirm } from '@inquirer/prompts';
import User from '../models/userClass.js';

const attemptUser = async () => {
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
	let userAttemptObject;

	while (true) {
		userAttemptObject = await attemptUser();

		if (userAttemptObject.userConfirmed) {
			const user = new User(userAttempt.userName)

			// userAction Pushing will be later refactored into a class method for User
			user.userActions.push(userAttempt);

			return user;
		}

		console.log('Hmmm... Let us try again then....')
	};
};
