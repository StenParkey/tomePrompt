import { confirm } from '@inquirer/prompts'

export default async function quit(state) {
	// Change the prompt message if we are in the mainMenu state
	let quitMessage;
	state === 'mainMenu'
		? quitMessage = 'Would you like to exit tomePrompt?'
		: quitMessage = 'Would you like to exit to the Main Menu?'

	const quitBoolean = await confirm({
		message: quitMessage,
		default: false
	});

	if (quitBoolean && state === 'mainMenu') {
		// If we attempt quit and are in main menu state we fully exit tomePrompt
	} else if (quitBoolean) {
		// If we attempt quit and are not in main menu state, then we exit the current sub-app to the main menu
	} else {
		// If we cancel a quit attempt then nothing happens and we stay in the current sub-app and state
	}
};
