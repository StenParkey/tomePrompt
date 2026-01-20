import initUser from './cli_components/initUser.js';
import splashStartup from './cli_components/splashStartup.js';
import mainMenu from './cli_components/mainMenu.js';

const tomePrompt = async () => {
	const user = await initUser();

	await splashStartup();
	const mainMenuSelectionObject = await mainMenu(user);

	switch (mainMenuSelectionObject.selection) {
		case 'diviutils':
			break;
		case 'battlesim':
			break;
		case 'armori':
			break;
		case 'spellbook':
			break;
		case 'loredex':
			break;
	}

	//test logs
	console.log(user);
	console.log(mainMenuSelection);
};
tomePrompt();
