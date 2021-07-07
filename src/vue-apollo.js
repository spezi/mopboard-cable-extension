import Vue from "vue";
import { ApolloClient } from "../node_modules/apollo-client";
import { HttpLink } from "../node_modules/apollo-link-http";
import { onError } from "../node_modules/apollo-link-error";
import { InMemoryCache } from "../node_modules/apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import Cookies from "js-cookie";

const CSRF_TOKEN = Cookies.get("csrftoken");

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "/graphql",
  credentials: "include",
  headers: {
    "X-CSRFToken": CSRF_TOKEN
  }
});

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

// Install the vue plugin
Vue.use(VueApollo);

export default apolloProvider;
