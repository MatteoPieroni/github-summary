import { Adapter, Settings } from './adapters/adapter';
import { firebaseAuth } from './adapters/firebase/firebase-adapter';

interface AuthSettings {
	service: Adapter;
}

export type AuthResult = {
	token: string;
	name: string;
};

export class Authentication {
	private authService: Adapter;
	private isInitialised: boolean;

	constructor(config: AuthSettings) {
		this.authService = config.service;
		this.isInitialised = false;
	}

	public init(settings: Settings): void {
		if (!this.isInitialised) {
			this.authService.init(settings);
			this.isInitialised = true;
		}
	}

	public async checkCredentials(): Promise<AuthResult | null> {
		return await this.authService.checkCredentials();
	}

	public async login(...args: unknown[]): Promise<AuthResult> {
		return await this.authService.login(...args);
	}

	public async logout(): Promise<void> {
		return await this.authService.logout();
	}
}

export const authentication = new Authentication({
	service: firebaseAuth,
});
