import initUser from './components/initUser.js';
import splashStartup from './components/splashStartup.js';
import mainMenu from './components/mainMenu.js';

const tomePrompt = async () => {
	const user = await initUser();

	await splashStartup();
	const mainMenuSelectionObject = await mainMenu(user);

	//test logs
	console.log(user);
};
tomePrompt();
