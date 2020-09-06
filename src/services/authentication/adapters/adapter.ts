import { AuthResult } from '../authentication';

export type Settings = {
	[key: string]: string;
};

export interface Adapter {
	init: (settings: Settings) => void;
	checkCredentials: () => Promise<AuthResult | null>;
	login: (...args: unknown[]) => Promise<AuthResult>;
	logout: () => Promise<void>;
}
