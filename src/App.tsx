import React from 'react';
import netlify from 'netlify-auth-providers';
import axios from 'axios';

const auth = new netlify({ site_id: '' });

const get = axios.get('ciao');

export const App = (): JSX.Element => (
	<div>
		Hello world
		<button
			onClick={() => {
				auth.authenticate({ provider: 'github' }, (err, data) => {
					console.log(err, data);
				});
			}}
		>
			login
		</button>
	</div>
);
