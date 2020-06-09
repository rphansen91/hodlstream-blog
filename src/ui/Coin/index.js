import React, { Component } from "react"
// import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import { useTheme } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper"
import Line from "../../charts/Line"
import { Query } from "react-apollo"
import usd from "../../utility/usd"
import btc from "../../utility/btc"
// import { setAdding } from "../../store/reducers/adding";
import Layout from "../Layout"
import CryptoIcon from "./Icon"
import Percent from "../Menu/Percent"
import { Shop } from "../Shop"
// import Tx from "../../portfolio/Tx";
// import { Buy } from "../../portfolio/Buy";
// import { current } from "../../portfolio/compute";
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots"
import gql from "graphql-tag"
import SEO from "../SEO"
import ArticleSidebar from "../Article/Sidebar"
import "./style.css"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import ExitToApp from "@material-ui/icons/ExitToApp"
import CardHeader from "@material-ui/core/CardHeader"
import Divider from "@material-ui/core/Divider"

const iconStyle = { height: "4em" }
const coinQuery = gql`
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
`

const loadingCoin = name => ({
  symbol: "",
  name: "Loading",
  price_usd: 0,
  price_btc: 0,
  percent_change_24h: 0,
})
const defaultCoin = () => ({
  symbol: "NaC",
  name: "Not Found",
  price_usd: 0,
  price_btc: 0,
  percent_change_24h: 0,
})
const computeValueAt = series => createdAt => {
  for (var i = 0; i < series.length; i++) {
    if (createdAt <= series[i][0]) return series[i][1]
  }
  return 0
}

const Coin = ({
  id,
  name,
  symbol,
  data,
  onRemove,
  txs,
  pos,
  neg,
  ...props
} = {}) => {
  const theme = useTheme()
  const color = theme.palette.text.secondary
  const image = (process.env.PUBLIC_URL || "https://hodlstream.com") + "/png/" + symbol + ".png"
  const total = 0 //current(txs)(new Date().getTime())[id];
  const point = (x, y) => ({ x, y, xAxis: 0, yAxis: 0 })
  const coin = data && data.coin ? data.coin : loadingCoin()
  const series = (coin.history || []).map(({ ts, value }) => [ts * 1000, value])
  const valueAt = computeValueAt(series)
  const annotations = (txs || []).reduce(
    (acc, tx) => {
      if (tx.coin !== id) return acc
      if (!tx.value) return acc

      const t = tx.createdAt * 1000
      const x = new Date(t)
      const y = valueAt(t)
      const p = point(x, y)

      if (tx.value >= 0) {
        acc[0].labels.push({ point: p, text: `Purchased ${tx.value}` })
      } else {
        acc[1].labels.push({ point: p, text: `Sold ${Math.abs(tx.value)}` })
      }
      return acc
    },
    [
      { labels: [] }, // Buy Labels
      { labels: [] }, // Sell Labels
    ]
  )

  return (
    <div>
      <SEO
        images={{
          google: image,
          facebook: image,
          twitter: image,
        }}
        title={symbol + " | Hodl Stream"}
        path={"/coin/" + id}
      />
      <Layout
        content={
          <>
            <TopBannerDisplayAd />
            <section />
            <Box maxWidth="xl" textAlign="center" p={3}>
            <Paper style={{ border: `.2em solid rgba(255, 255, 255, 0.7)`, paddingTop: '0.3em' }}>
              <CryptoIcon
                icon={symbol}
                attrs={{ fill: color }}
                style={iconStyle}
              />
              <Typography variant="h1" color="textPrimary">
                {name}
              </Typography>
              {props.loading ? (
              <div className="coin-details">
                <Typography type="body1" variant="subtitle1" color="textSecondary" className="skeleton" style={{ width: 120, margin: 'auto', marginBottom: 8 }}>
                  &nbsp;
                </Typography>
                <Typography type="body2" variant="subtitle2" color="textSecondary" className="skeleton" style={{ width: 100, margin: 'auto', marginBottom: 32 }}>
                  &nbsp;
                </Typography>
              </div>) : (
              <div className="coin-details">
                <Typography type="body1" variant="subtitle1" color="textSecondary">
                  {usd.display(coin.price_usd)} USD
                </Typography>
                <Typography type="body2" variant="subtitle2" color="textSecondary">
                  {btc.display(coin.price_btc)} BTC
                </Typography>
                <div className="coin-seperator" />
                <Percent value={coin.percent_change_24h} pos={pos} neg={neg} />
                <Typography type="body2" color="textSecondary">
                  {total} {symbol}
                </Typography>
              </div>
              )}

                {props.loading ? (
                  <div
                    className="skeleton"
                    style={{ height: 320, display: 'block' }}
                  ></div>
                ) : (
                  <Line
                    title={
                      id && !series.length ? `No ${id} historical data found` : ""
                    }
                    subtitle=""
                    name={`coin-${id}`}
                    series={{ [symbol]: series }}
                    annotations={annotations}
                    colors={[color]}
                    style={{ height: 320 }}
                    onClick={e => {
                      props.setAdding(id, e.point.x)
                      props.history.push((process.env.PUBLIC_URL || "https://hodlstream.com") + "/add")
                    }}
                  />
                )}
            </Paper>
            </Box>

            <Affiliates symbol={symbol} />

            <Box p={3}>
              {/* <Buy crypto_currency={symbol} /> */}
              <Shop variables={{ q: (symbol || "").toLowerCase() }} />
            </Box>
            <BottomBannerDisplayAd />
          </>
        }
        sidebar={<ArticleSidebar />}
      />
    </div>
  )
}

const coinLinks = {
  'BTC': [{
    image: 'https://m.media-amazon.com/images/I/41AghtmRPvL.jpg',
    title: 'The Bitcoin Standard: The Decentralized Alternative to Central Banking',
    link: 'https://amzn.to/3f4ABQB'
  }, {
    image: 'https://m.media-amazon.com/images/I/511aHJnK1CL.jpg',
    title: 'Gold Bitcoin 2020 Commemorative Celebrate The Bitcoin HALVENING!',
    link: 'https://amzn.to/2MJGiY1'
  }, {
    image: 'https://m.media-amazon.com/images/I/51wQBSqIzGL.jpg',
    title: 'Bitcoin For Dummies',
    link: 'https://amzn.to/2Un9R6c'
  }, {
    image: 'https://m.media-amazon.com/images/I/41nPu-KmSiL.jpg',
    title: 'Bitcoin & Black America',
    link: 'https://amzn.to/2UpKOPY'
  }],
  'ETH': [{
    image: 'https://m.media-amazon.com/images/I/51X3VeaAZnL.jpg',
    title: 'Mastering Ethereum: Building Smart Contracts and DApps',
    link: 'https://amzn.to/3h3h8BP'
  }, {
    image: 'https://m.media-amazon.com/images/I/41jzQHhbJBL.jpg',
    title: 'Learn Ethereum: Build your own decentralized applications with Ethereum and smart contracts',
    link: 'https://amzn.to/2UpLwN8'
  }, {
    image: 'https://m.media-amazon.com/images/I/41IaV7YTP9L.jpg',
    title: 'Gold Ethereum Coin w/Showcase Box: Limited Edition Collector Set | Physical Gold Coin with Crypto Coin Display Case | Cryptocurrency Coin with Realistic Details | Great Desk Home Gift Idea HODL Fans',
    link: 'https://amzn.to/2BO85o9'
  }, {
    image: 'https://m.media-amazon.com/images/I/51yxiCDdN+L.jpg',
    title: 'Blockchain City',
    link: 'https://amzn.to/3h9p1pd'
  }]
}

const Affiliates = ({ symbol }) => {
  const links = coinLinks[symbol]
  console.log(coinLinks, symbol)
  if (!links) return null
  return <Box p={3}>
    <Paper style={{ border: `.2em solid rgba(255, 255, 255, 0.7)`, paddingTop: '0.3em' }}>
      <CardHeader title="More Resources" />
      <Divider />
    <List>
    {links.map(({ image, title, subtitle, link  }, i) => <ListItem component="a" target="_blank" href={link} button key={i}>
      <ListItemAvatar>
        <Avatar src={image} alt={title} variant="square">{title}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} />
      <ListItemSecondaryAction>
        <IconButton component="a" target="_blank" href={link}>
          <ExitToApp />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>)}
  </List>
  </Paper>
  </Box>
}

export default props => (
  <Query query={coinQuery} variables={{ id: props.id, pair: props.pair }}>
    {data => <Coin {...props} {...data} />}
  </Query>
)
