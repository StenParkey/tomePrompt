import { input, select, Separator, } from '@inquirer/prompts';


export default async function eightBall(user) {
	const questionInput = await input({
		message: `Welcome ${user.userName}... to eightBall. What would you like to ask?`,
		required: true
	});

};
