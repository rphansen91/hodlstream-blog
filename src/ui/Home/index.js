import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Trend from "../Trend"
import coinColor from "./colors"
// import Add from "../../portfolio/Add";
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots"
import Layout from "../Layout"
import { Link } from "gatsby"
import ArticleSidebar from "../Article/Sidebar"
import "./style.css"

export default ({ coins, pair }) => (
  <Layout
    content={
      <>
        <TopBannerDisplayAd />
        <section />
        <Typography
          variant="h4"
          color="textPrimary"
          align="center"
          style={{ marginBottom: "0.3rem" }}
        >
          Trends
        </Typography>
        <Box p={3}>
          <Grid container spacing={3}>
            {coins.map(c => (
              <Grid item xs={12} lg={6} key={c.id}>
                <Link to={`/coin/${c.id}/`}>
                  <Trend
                    id={c.id}
                    name={c.name}
                    symbol={c.symbol}
                    pair={pair}
                    showTrend={true}
                    color={coinColor(c.id)}
                  />
                </Link>
              </Grid>
            ))}
            <Grid item xs={12} lg={6}>
              {/* <div className="trend h-100"> */}
              {/* <Add /> */}
              {/* </div> */}
            </Grid>
          </Grid>
        </Box>
        <BottomBannerDisplayAd />
      </>
    }
    sidebar={<ArticleSidebar />}
  />
)
