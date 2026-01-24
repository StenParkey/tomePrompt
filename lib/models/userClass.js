export default class User {
	constructor(userName) {
		this.userName = userName;
		this._userActions = [];
	}

	get userActions() {
		return this._userActions
	}

	pushAction(actionObject) {
		this._userActions.push(actionObject);
	}
};
