import { NextPage } from 'next';
import Link from 'next/link';
import { User } from '../../models/user/User';
import style from '../../styles/Users.module.scss';

export const getStaticProps = async () => {
	const result = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await result.json();

	return {
		props: {
			users: data,
		},
	};
};

interface UsersPageProps {
	users: User[];
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
	return (
		<div>
			<h1>Users Page</h1>

			<div className={style.users}>
				{users.map((user) => (
					<Link href={`users/${user.id}`} key={user.id}>
						<a className={style.user}>{user.name}</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default UsersPage;
