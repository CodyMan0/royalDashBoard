import { GraphQLClient } from "graphql-request";

export const graphqlRequestClient = new GraphQLClient(
	process.env.NODE_ENV === "production"
		? "https://hychurch-server.duckdns.org:3000/graphql"
		: "http://localhost:3000/api"
);
