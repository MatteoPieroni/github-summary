import { organisationCourier } from '../../../couriers';
import { ResponseData, Service } from '../../service';

export interface Organisation extends ResponseData {
	id: string;
	avatar_url: string;
}

class OrganisationsService extends Service {
	constructor(args) {
		super(args);
	}

	get(): Promise<Organisation> {
		return this.courier.get();
	}
}

export const organisationService = new OrganisationsService(
	organisationCourier
);
