import React, { useEffect, useState } from 'react';

import { authentication } from './services/authentication';
import { AuthResult } from './services/authentication/authentication';
import {
	Organisation,
	organisationService,
} from './services/github/organisations/organisations';

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
};

export const App = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [userData, setUserData] = useState<AuthResult>();
	const [orgs, setOrgs] = useState<Organisation>();

	useEffect(() => {
		authentication.init(firebaseConfig);

		(async () => {
			const credentials = await authentication.checkCredentials();

			if (credentials && credentials !== null) {
				setIsLoggedIn(true);
				setUserData(credentials);
			}

			setIsLoading(false);
		})();
	}, []);

	const getCredentials = async () => {
		const data = await authentication.login();

		setUserData(data);
	};

	const getOrgs = async () => {
		const { data } = await organisationService.get();

		setOrgs(data as Organisation);
	};

	return (
		<div>
			<h1>Hello world</h1>
			{isLoading ? (
				<p>loading</p>
			) : (
				<>
					{!isLoggedIn && <button onClick={getCredentials}>login</button>}
					{userData && (
						<p>
							{userData.name} - {userData.token}
							<button onClick={getOrgs}>fetch orgs</button>
							{orgs && <span>{orgs.toString()}</span>}
						</p>
					)}
				</>
			)}
		</div>
	);
};
