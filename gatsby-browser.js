/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ProfileProvider } from './src/components/profile'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  uri: process.env.GATSBY_APOLLO,
  fetch
})

export const wrapRootElement = ({ element }) => {
  return (
    <ProfileProvider>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </ProfileProvider>
  )
}