import Link from 'next/link';
import { HOME_PAGE } from '../constants/routes';

const NotFoundPage = () => {
	return (
		<div>
			<h1>404. The page you requested does not exist!</h1>
			<Link href={HOME_PAGE}>Go back to homepage</Link>
		</div>
	);
};

export default NotFoundPage;
