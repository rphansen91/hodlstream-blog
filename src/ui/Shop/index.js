import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {
  TopBannerDisplayAd,
  BottomBannerDisplayAd,
} from "../../ads/slots";
import Article from "../Article";
import withProducts from "./withProducts";
import { event } from "../../utility/analytics";

function handleCheckout(product) {
  return async function () {
    if (!product) return
    if (typeof window !== 'undefined') {
      const stripe = window.Stripe("pk_live_TlQEL4Beak0KfzzYxfRjeYsM");
      try {
        event('product', 'redirect', product.name)
        const result = await stripe.redirectToCheckout({
          sessionId: product.session
        });
        event('product', 'redirectSuccess', product.name)
        console.log(result);
      } catch (e) {
        event('product', 'redirectError', product.name)
        console.log(e);
      }
    }
  };
}

export const Shop = withProducts(({ products, data }) => (
  <Grid container spacing={3}>
    {(products || (data && data.products) || []).map((a, i) => {
      return (
        <Grid item lg={3} md={4} xs={12} key={i}>
          <Article
            onClick={data.products && data.products[i] && handleCheckout(data.products[i])}
            imageSize={260}
            image={a.images[0]}
            title={`${a.name} - $${(a.amount / 100).toLocaleString(
              undefined,
              {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              }
            )}`}
            imageStyle={{
              borderBottom: "1px solid",
              backgroundSize: "contain"
            }}
            actions={
              <CardActions>
                {data.products && data.products[i] && <Button
                  color="primary"
                  variant="contained"
                  aria-label="Buy Now"
                  onClick={handleCheckout(data.products[i])}
                >
                  Buy Now
                </Button>}
              </CardActions>
            }
          />
        </Grid>
      );
    })}
  </Grid>
));

export default ({ products }) => (
  <div>
    <TopBannerDisplayAd />
    <Box pt={3}>
      <Typography variant="h4" color="textPrimary" className="text-center">
        Shop
      </Typography>
    </Box>
    <Box p={3}>
      <Shop products={products} />
    </Box>
    <BottomBannerDisplayAd />
  </div>
);
