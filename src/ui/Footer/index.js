import React from "react";
import Brand from "../Brand";
import coinmarketcap_t from "../../images/coinmarketcap_t.png"
import highcharts_t from "../../images/highcharts_t.png"
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";
import "./style.css";

export default () => (
  <div className="page-footer primary-gradient">
    <section>
      <Brand
        style={{
          color: "#fff",
          cursor: "pointer",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FooterLink to="/coins/">Coins</FooterLink>
        <FooterLink to="/blog/">Blog</FooterLink>
        <FooterLink to="/shop/">Shop</FooterLink>
      </div>
      <Typography paragraph className="footer-ps">
        Thank you to
        <a href="https://www.coinmarketcap.com" target="_blank">
          <img
            alt="Coinmarketcap Logo"
            src={coinmarketcap_t}
            height="15"
            width="auto"
          />
        </a>
        for providing price analytics and
        <a href="https://www.highcharts.com" target="_blank">
          <img
            alt="Highcharts Logo"
            src={highcharts_t}
            height="25"
            width="auto"
            style={{ transform: "translate3d(0,-3px,0)" }}
          />
        </a>
        for charting.
      </Typography>
    </section>
  </div>
);

const FooterLink = ({ children, to }) => {
  return <Link to={to} style={{ color: "white", margin: "0 4px", textDecoration: "none" }}>
    <Typography paragraph>
      {children}
    </Typography>
  </Link>
}