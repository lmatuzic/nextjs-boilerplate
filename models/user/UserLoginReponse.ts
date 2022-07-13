export interface UserLoginResponse {
	access_token: string;
	user: {
		id: string;
		name: string;
		lastName: string;
		email: string;
		role: string;
		password: string;
	};
}
