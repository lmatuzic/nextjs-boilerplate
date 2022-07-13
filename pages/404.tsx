import Link from 'next/link';
import { HOME_PAGE } from '../constants/routes';

const NotFoundPage = () => {
	return (
		<div>
			<h1>404. This page does not exist!</h1>
			<Link href={HOME_PAGE} passHref>
				Go back to homepage
			</Link>
		</div>
	);
};

export default NotFoundPage;
