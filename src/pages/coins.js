import React from "react"
import { Link, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography";
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import {
    TopBannerDisplayAd,
    BottomBannerDisplayAd,
  } from "../ads/slots";
import Trend from "../ui/Trend"

export default ({ data }) => (
  <Layout>
    <SEO title="Coins | Hodl Stream" path={"/coins"} />
    <TopBannerDisplayAd />
    <section />
    <Typography variant="h1" color="textPrimary" className="text-center">
        Coins
    </Typography>
    <section />
    <div className="container">
        <div className="row">
            {data.blockQl.all_coins.map((coin) => (
                <div className="col-md-4 mb-3" key={coin.id}>
                    <Link to={`/coin/${coin.id}/`}>
                        <Trend {...coin} pair="USD" showTrend={false} />
                    </Link>
                </div>
            ))}
        </div>
    </div>
    <BottomBannerDisplayAd />
  </Layout>
)

export const query = graphql`
query {
    blockQl {
        all_coins {
            id
            name
            symbol
        }
    }
}
`