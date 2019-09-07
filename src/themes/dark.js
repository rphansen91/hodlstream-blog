import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({ palette: { type: "dark" } });

darkTheme.typography.h1 = darkTheme.typography.h4;

export default darkTheme