import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import NavigationClose from "@material-ui/icons/Close";
import NavigationMenu from "@material-ui/icons/Menu";
// import { PortfolioBannerAd } from "./ads/slots";
import { MuiThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../themes/dark";
import Brand from "../ui/Brand";

const Header = ({ menu, toggleMenu }) => <AppBar
  position="static"
  className="primary-gradient"
>
  <Toolbar>
    <IconButton
      onClick={toggleMenu}
      color="default"
      aria-label="Menu"
      style={{ width: 40, color: "#fff" }}
    >
      {menu ? (
        <NavigationClose color="inherit" />
      ) : (
          <NavigationMenu color="inherit" />
        )}
    </IconButton>
    <Link
      to="/"
      aria-label="Home"
      style={{
        verticalAlign: "middle",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        textDecoration: "none"
      }}
    >
      <Brand
        style={{
          color: "#fff",
          cursor: "pointer",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center"
        }}
      />
    </Link>
    {/* <Pairs style={{ width: 70 }} /> */}
  </Toolbar>
  <MuiThemeProvider theme={darkTheme}>
    <div id="jumbotron" />
  </MuiThemeProvider>
</AppBar>

Header.propTypes = {
  menu: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

Header.defaultProps = {
  menu: false,
  toggleMenu: () => {},
}

export default Header
