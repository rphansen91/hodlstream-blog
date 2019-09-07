import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import CryptoIcon from "../Coin/Icon"
import Percent from "./Percent"
import { Query } from "react-apollo"
import { Link } from "gatsby"
import gql from "graphql-tag"

const defaultCoin = name => ({ symbol: "", percent_change_24h: 0 })
const iconStyle = {
  height: 24,
  width: 24,
}

const coinQuery = gql`
  query Coin($id: String!) {
    coin(id: $id) {
      id
      name
      symbol
      price_usd
      price_btc
      percent_change_24h
    }
  }
`

export default ({ open, id }) => {
  return (
    <Query query={coinQuery} variables={{ id }}>
      {({ data }) => {
        const coin = data && data.coin ? data.coin : defaultCoin(id)
        return (
          <Link aria-label={coin.symbol} to={"/coin/" + id}>
            <ListItem button>
              <ListItemIcon>
                <CryptoIcon icon={coin.symbol} style={iconStyle} />
              </ListItemIcon>
              <ListItemText style={{ opacity: open ? 1 : 0 }}>
                <Typography color="textPrimary">{coin.symbol}</Typography>
              </ListItemText>
              <Percent value={coin.percent_change_24h} />
            </ListItem>
          </Link>
        )
      }}
    </Query>
  )
}
