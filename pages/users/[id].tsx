import { NextPage } from 'next';
import { User } from '../../models/user/User';

export const getStaticPaths = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	const paths = data?.map((user: User) => {
		return {
			params: {
				id: user.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context: any) => {
	const id = context.params.id;
	const reponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await reponse.json();

	return {
		props: {
			user: data,
		},
	};
};

interface UserDetailsPageProps {
	user: User;
}

const HomePage: NextPage<UserDetailsPageProps> = ({ user }) => {
	return (
		<div>
			<h1>{user.name}</h1>
			<div>{user.email}</div>
			<div>{user.address.street}</div>
		</div>
	);
};

export default HomePage;
