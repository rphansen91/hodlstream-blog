// import "bootstrap/dist/css/bootstrap.css";
import React from 'react'
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from "@date-io/moment";
import { useProfile } from "../components/profile";
import light from "./light";
import dark from "./dark";

const themes = {
  light, 
  dark 
}

export default ({ children }) => {
  const [{ theme }] = useProfile()
  return (
    <MuiThemeProvider theme={themes[theme] || dark}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}
