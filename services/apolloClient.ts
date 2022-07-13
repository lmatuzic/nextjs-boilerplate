import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
	uri: `URL of your GraphQL server`,
	cache: new InMemoryCache(),
	// headers: {
	// 	authorization: `Bearer ${ACCESS_TOKEN}`,
	// },
});
