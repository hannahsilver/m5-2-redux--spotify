import React from "react";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
html,
body,
div,
span {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: 'Montserrat', sans-serif;
}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
}
`;

export default GlobalStyles;
