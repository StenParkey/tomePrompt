import initUser from './components/initUser.js';
import splashStartup from './components/splashStartup.js';
import mainMenu from './components/mainMenu.js';

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
	};

	//test logs
	console.log(user);
	console.log(mainMenuSelectionObject);
};
tomePrompt();
