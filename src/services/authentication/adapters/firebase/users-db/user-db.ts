import * as firebase from 'firebase/app';
import 'firebase/database';

export type userInfo = {
	uid: string;
	accessToken: string;
};

export class UserDb {
	db: firebase.database.Database;

	public async retrieveUser(uid: string): Promise<string> {
		this.db = firebase.database();
		const accessTokenRef = await this.db.ref(`/users/${uid}`).once('value');
		const accessToken = accessTokenRef.val().access_token as string;

		return accessToken;
	}

	public async createOrUpdateUser(user: userInfo): Promise<void> {
		await this.db.ref(`/users/${user.uid}`).set({
			access_token: user.accessToken,
		});
	}
}

export const userDb = new UserDb();
