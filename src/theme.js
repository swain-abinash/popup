import { createTheme } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Material UI Theme
const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
  },
  // Add more MUI theme customizations if needed
});

// Styled Components Theme
const styledTheme = {
  colors: {
    primary: "#1976d2",
    secondary: "#dc004e",
    // Add more custom colors or theme variables here
  },
};

export { muiTheme, styledTheme, StyledThemeProvider };
