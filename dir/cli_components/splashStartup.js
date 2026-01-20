import cliFrames from 'cli-frames';
import assets from '../models/assetsObject.js';

export default async function splashStartup() {
	// The top of this function will be reserved for running the splash animation, then clearing screen and showing the title

	console.log(assets.assetsObject.title);
	console.log('\n');
};
