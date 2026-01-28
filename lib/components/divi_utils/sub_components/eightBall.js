import { input, select, Separator, } from '@inquirer/prompts';
const eightBallObject = {
	_answers: [
		// 4 Positive Responses
		'Yes, it is certain...',
		'As of now, yes...',
		'Signs point towards yes.',
		'Most likely, yes..',
		// 2 Neutral Responses
		'It is unclear at this time....',
		'Reply hazy.. ask again later.',
		// 4 Negative Responses
		'No, it is not meant to be.',
		'At this time, no..',
		'A resounding no...',
		'It does not look promising....'
	],

	get answers() {
		return this._answers;
	},

	askQuestion() {
		return this.answers[Math.floor(Math.random() * (answers.length + 1))]
	}
};

export default async function eightBall(user) {
	const questionInput = await input({
		message: `Welcome ${user.userName}... to eightBall. What would you like to ask?`,
		required: true
	});

};
