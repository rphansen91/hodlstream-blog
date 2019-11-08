import React from "react";
import Typography from "@material-ui/core/Typography";
import Trend from "../Trend";
import coinColor from "./colors";
// import Add from "../../portfolio/Add";
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots";
import Layout from "../Layout";
import { Link } from "gatsby"
import ArticleSidebar from "../Article/Sidebar";
import "./style.css";

export default (({ coins, pair }) => (
  <Layout
    content={
      <div>
        <TopBannerDisplayAd />
        <section />
        <div className="container">
          <Typography variant="h4" color="textPrimary" className="text-center mb-3">
            Trends
          </Typography>
          <div className="row">
            {coins.map(c => (
              <div className="col-lg-6 mb-3" key={c.id}>
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
              </div>
            ))}
            <div className="col-lg-6 mb-3">
              {/* <div className="trend h-100"> */}
                {/* <Add /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <BottomBannerDisplayAd />
      </div>
    }
    sidebar={<ArticleSidebar />}
  />
));
