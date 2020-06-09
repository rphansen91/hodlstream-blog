import React from "react"
import { Link, graphql } from "gatsby"
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
    <Box pt={3}>
        <Typography variant="h1" color="textPrimary" align="center">
            Coins
        </Typography>
    </Box>
    <Box p={3}>
        <Grid container spacing={3}>
            {data.blockQl.all_coins.map((coin) => (
                <Grid item md={4} lg={3} xs={12} style={{ marginBottom: '0.3rem' }} key={coin.id}>
                    <Link to={`/coin/${coin.id}/`}>
                        <Trend {...coin} pair="USD" showTrend={false} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    </Box>
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