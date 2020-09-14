import axios from 'axios';

import { Courier } from '../courier';
import { BASE_API } from '../common';

export class OrganisationCourier extends Courier {
	get(): Promise<any> {
		return axios.get(`${BASE_API}/organizations`);
	}
}

export const organisationCourier = new OrganisationCourier();
