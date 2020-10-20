<<<<<<< HEAD
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import Cookie from "js-cookie";
import { useMemo } from "react";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

let apolloClient = null;

=======
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-fetch";
import { useMemo } from "react";
import Cookie from "js-cookie";
let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
>>>>>>> 85320bba75292f4f01e9f91dab3620503ce74134
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState, token) {
<<<<<<< HEAD
  let link = createHttpLink({
    uri:
      process.env.NODE_ENV !== "development"
        ? `${SERVER_URL}/api/graphql`
        : "http://localhost:8000/api/graphql",

    fetch,
=======
  const httpLink = createHttpLink({
    uri: process.env.baseUrl,
    credentials: "same-origin",
>>>>>>> 85320bba75292f4f01e9f91dab3620503ce74134
  });

  const authLink = setContext(() => {
    return {
      headers: {
<<<<<<< HEAD
        Authorization: `Bearer ${token || Cookie.get("token")}` || "",
=======
        authorization:
          typeof window === "undefined" ? token : Cookie.get("token"),
>>>>>>> 85320bba75292f4f01e9f91dab3620503ce74134
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
<<<<<<< HEAD
    link: authLink.concat(link),
=======
    link: authLink.concat(httpLink),
>>>>>>> 85320bba75292f4f01e9f91dab3620503ce74134
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

<<<<<<< HEAD
export const initializeApollo = (initialState, options) => {
=======
export function initializeApollo(initialState, options) {
>>>>>>> 85320bba75292f4f01e9f91dab3620503ce74134
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
<<<<<<< HEAD
};
=======
}
>>>>>>> 85320bba75292f4f01e9f91dab3620503ce74134

export const useApollo = (initialState) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
