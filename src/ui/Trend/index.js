import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import usd from "../../utility/usd";
import btc from "../../utility/btc";
import Percent from "../Menu/Percent";
import CryptoIcon from "../Coin/Icon";
import Line from "../../charts/Line";
import { useTheme } from "@material-ui/styles";
import "./Coin.css";

const trendQuery = gql`
  query CoinDetail($id: String!, $pair: String!) {
    coin(id: $id) {
      id
      name
      symbol
      price_usd
      price_btc
      percent_change_24h
      history(pair: $pair) {
        ts
        value
      }
    }
  }
`;

const loadingCoin = name => ({
  symbol: "",
  name,
  price_usd: 0,
  price_btc: 0,
  percent_change_24h: 0
});
const defaultCoin = () => ({
  symbol: "NaC",
  name: "Not Found",
  price_usd: 0,
  price_btc: 0,
  percent_change_24h: 0
});

const Trend = ({
  id,
  symbol,
  name,
  data,
  showTrend,
  className,
  pos,
  neg,
  ...props
} = {}) => {
  const theme = useTheme();
  const coin = data && data.coin ? data.coin : loadingCoin()

  const series = (coin.history || []).map(({ ts, value }) => [
    ts * 1000,
    value
  ]);
  const color = theme.palette.text.secondary;
  return (
    <div
      className={["trend"]
        .concat(className)
        .filter(c => c)
        .join(" ")}
      style={{ color }}
      {...props}
    >
      <div className="coin-header text-center">
        <CryptoIcon
          icon={symbol}
          attrs={{ fill: color }}
          style={{ height: "4em" }}
        />
        <div className="coin-details">
          <p className="coin-name">{name}</p>
          {coin.price_usd ? <p>{usd.display(coin.price_usd)} USD</p> : <p>&nbsp;</p>}
          {coin.price_btc ? <p>{btc.display(coin.price_btc)} BTC</p> : <p>&nbsp;</p>}
          <div className="coin-seperator" />
          {coin.percent_change_24h ? <Percent value={coin.percent_change_24h} pos={pos} neg={neg} /> : null}
        </div>
      </div>
      <div className="position-relative">
      {showTrend !== false ? 
        <Line
          title={name}
          name={`trend-${id}`}
          subtitle={coin.price_usd}
          series={{ [symbol]: series }}
          colors={[color]}
        />
      : null}
      {/* {coin.price_usd ? null : <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center" style={{ top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <p className="coin-name">Currently Unavailable</p>
      </div>} */}
      </div>
    </div>
  );
};

export default (props) => {
  return <Query query={trendQuery} variables={{ id: props.id, pair: props.pair }}>
    {data => <Trend {...props} {...data} />}
  </Query>
}
