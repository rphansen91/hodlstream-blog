import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import Shop from "../ui/shop"

export default ({ data }) => (
  <Layout>
    <SEO title="Shop | Hodl Stream" path={"/shop"} />
    <Shop products={data.blockQl.products} />
  </Layout>
)

export const query = graphql`
query {
    blockQl {
        products {
            name
            amount
            description
            images
            currency
        }
    }
}
`