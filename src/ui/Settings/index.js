import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "gatsby";
import Switch from "@material-ui/core/Switch";
import { useProfile } from "../../components/profile"
// import storage from "../../utility/storage";
// import Exchange from "../Exchange";

export default () => {
  const [{ theme }, setProfileValue] = useProfile()
  return (
    <div>
      <section>
        <TopBannerDisplayAd />

        <section />

        <Typography variant="h1" color="textPrimary" className="text-center">
          Settings
        </Typography>

        <section />

        {/* <section>
          <Typography variant="subtitle1" color="textPrimary">
            Exchanges
          </Typography>
          <div className="icons">
            <Exchange name={"Bittrex"} />
            <Exchange name={"Binance"} />
            <Exchange name={"HitBTC"} />
          </div>
        </section> */}

        <div className="contained">
          <section>
            <Typography variant="subtitle1" color="textPrimary">
              Theme
            </Typography>
            <FormGroup>
              <FormControlLabel
                label={theme !== "light" ? "Dark" : "Light"}
                control={
                  <Switch
                    color="primary"
                    checked={theme !== "light"}
                    onChange={(event, checked) => {
                      setProfileValue('theme', checked ? "dark" : "light");
                    }}
                  />
                }
              />
            </FormGroup>
          </section>

          <section>
            <List>
              <ListItem>
                <Link aria-label="terms" to="/terms">
                  <Button variant="contained">Terms and Conditions</Button>
                </Link>
              </ListItem>
            </List>
          </section>

          <BottomBannerDisplayAd />
        </div>
      </section>
    </div>
  );
};
