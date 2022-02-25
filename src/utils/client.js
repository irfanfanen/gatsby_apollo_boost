import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

export const client = new ApolloClient({
  uri: process.env.API_URL,
  headers: {
    'x-hasura-admin-secret': process.env.API_KEY,
  },
  fetch
});