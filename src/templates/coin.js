import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Coin from "../ui/Coin"

export default function Template({ data }) {
  const coin = data.blockQl.coin
  return (
    <Layout>
        <Coin {...coin} pair="USD" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    blockQl {
      coin(id: $id) {
        id
        name
        symbol
        # price_usd
        # price_btc
        # percent_change_24h
      }
    }
  }
`