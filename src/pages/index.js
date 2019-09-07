import React from "react"
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import Home from "../ui/Home"
import defaultCoins from "../ui/Coin/defaultCoins"

const IndexPage = () => (
  <Layout>
    <SEO title="Hodl Stream" />
    <Home pair="USD" coins={defaultCoins} />
  </Layout>
)

export default IndexPage
