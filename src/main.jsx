import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { muiTheme, styledTheme } from "./theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import store from "./store";
import App from "./App";
import "./index.css"; // Optional: Your global styles

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider theme={styledTheme}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
