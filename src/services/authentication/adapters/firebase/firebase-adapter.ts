import * as firebase from 'firebase/app';
import 'firebase/auth';

import { Settings } from '../adapter';
import { AuthResult } from '../../authentication';
import { userDb } from './users-db/user-db';

export class FirebaseAdapter {
	private provider: firebase.auth.GithubAuthProvider;

	public init(settings: Settings): void {
		firebase.initializeApp(settings);

		this.provider = new firebase.auth.GithubAuthProvider();
		this.provider.addScope('repo');
	}

	public async checkCredentials(): Promise<AuthResult> {
		return new Promise(resolve => {
			firebase.auth().onAuthStateChanged(async user => {
				console.log(user);
				if (user) {
					const token = await userDb.retrieveUser(user.uid);

					resolve({
						token,
						name: user.displayName,
					});
				} else {
					resolve(null);
				}
			});
		});
	}

	public async login(): Promise<AuthResult> {
		try {
			const data = await firebase.auth().signInWithPopup(this.provider);
			const credential = data.credential as firebase.auth.OAuthCredential;

			await userDb.createOrUpdateUser({
				uid: data.user.uid,
				accessToken: credential.accessToken,
			});

			return {
				token: credential.accessToken,
				name: data.user.displayName,
			};
		} catch (e) {
			console.log(e);

			throw e;
		}
	}

	public async logout(): Promise<void> {
		await firebase.auth().signOut();
	}
}

export const firebaseAuth = new FirebaseAdapter();
