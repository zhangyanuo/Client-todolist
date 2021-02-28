import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const HttpLink = createHttpLink({ uri: "http://localhost:8000/graphql" });
const client = new ApolloClient({
    link: HttpLink,
    cache: new InMemoryCache()
});

export default client;
