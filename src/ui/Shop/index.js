import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {
  TopBannerDisplayAd,
  BottomBannerDisplayAd,
} from "../../ads/slots";
import Article from "../Article";
import withProducts from "./withProducts";

function handleCheckout(product) {
  return async function () {
    if (typeof window !== 'undefined') {
      const stripe = window.Stripe("pk_live_TlQEL4Beak0KfzzYxfRjeYsM");
      try {
        const result = await stripe.redirectToCheckout({
          sessionId: product.session
        });
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    }
  };
}

export const Shop = withProducts(({ products, data }) => (
  <div className="row">
    {(products || []).map((a, i) => {
      return (
        <div className="col-lg-4 col-md-6 mb-4" key={i}>
          <Article
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
        </div>
      );
    })}
  </div>
));

export default ({ products }) => (
  <div>
    <TopBannerDisplayAd />
    <section />
    <Typography variant="h4" color="textPrimary" className="text-center">
      Shop
    </Typography>
    <section />
    <section className="container">
      <Shop products={products} />
    </section>
    <BottomBannerDisplayAd />
  </div>
);
