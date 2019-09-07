/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri: 'https://laqr73ujn2.execute-api.us-east-1.amazonaws.com/dev/graphql',
  fetch
})

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>{element}</ApolloProvider>
  )
}