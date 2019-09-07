import { createMuiTheme } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({ palette: { type: "light" } });

lightTheme.typography.h1 = lightTheme.typography.h4;

export default lightTheme