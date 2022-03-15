import React from 'react';
import HomePage from './HomePage';
import { HelmetProvider } from 'react-helmet-async';
import { createGlobalStyle } from 'styled-components/macro';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

function App() {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <HomePage />
    </HelmetProvider>
  );
}

export const GlobalStyles = createGlobalStyle`
    :root {
    --main-color: #a5c3cb;
    --second-color:#d7dede;
    --light-gray:#eaf1f1;
    --dark-gray: #333;
    --black: #000;
    --gray: #7a7a7a;
    --white: #fff;
    --transition: all 0.3s linear;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }


`;

export default App;
