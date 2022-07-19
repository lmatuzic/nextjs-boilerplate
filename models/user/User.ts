export interface User {
	id: string;
	name: string;
	lastName: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
	};
	role?: string;
	token?: string;
}
