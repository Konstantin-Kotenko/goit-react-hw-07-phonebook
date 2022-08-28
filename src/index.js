import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styleConfig/GlobalStyle';
import { theme } from 'styleConfig/theme';
import { store } from './redux/store';
import { App } from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
