/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react"
import PropTypes from "prop-types"
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Header from "./header"
import Footer from "../ui/Footer";
import Menu from "../ui/Menu";
import light from "../themes/light";
import "./layout.css"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  return (
    <MuiThemeProvider theme={light}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Menu open={open} />
        <div className={`App ${open ? 'open' : ''}`}>
          <Header menu={open} toggleMenu={toggleMenu} />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </div>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
