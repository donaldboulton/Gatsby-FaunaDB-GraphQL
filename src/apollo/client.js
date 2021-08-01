import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"
import fetch from "isomorphic-fetch"
import { getToken } from "../services/auth"

export const client = new ApolloClient({
  // Apollo client is used in the Frontend only.
  uri: process.env.GATSBY_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  request: operation => {
    const token =
      getToken() ||
      process.env.GATSBY_DEVELOPER_FAUNADB_SERVER_SECRET ||
      process.env.DEVELOPER_FAUNADB_SERVER_SECRET
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    })
  },
  fetch,
})
