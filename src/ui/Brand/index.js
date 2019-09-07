import React from "react";
import Typography from "@material-ui/core/Typography";
import icon from '../../images/icon.png'


export default ({ onClick, style }) => (
  <Typography variant="h4" onClick={onClick} style={style}>
    <img
      alt="Logo"
      src={icon}
      style={{ height: "1em", marginRight: 4, borderRadius: "0.1em" }}
    />{" "}
    Hodl Stream
  </Typography>
);
