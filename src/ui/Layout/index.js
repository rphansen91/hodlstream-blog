import React from "react";
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

export default ({ content, sidebar }) => (
  <Grid container spacing={0}>
    <Grid item md={9} xs={12} className="main-content">{content}</Grid>
    <Grid item md={3} xs={12} className="sidebar-content border-left-2">{sidebar}</Grid>
  </Grid>
);
