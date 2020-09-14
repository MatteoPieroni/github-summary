import { Courier } from '../couriers/courier';

export interface ResponseData {
	[key: string]: unknown;
}

export class Service {
	courier: Courier | null;

	constructor(courier?: Courier) {
		if (courier) {
			this.courier = courier;
		} else {
			this.courier = null;
		}
	}

	async get(): Promise<ResponseData> {
		return this.courier.get();
	}
}
