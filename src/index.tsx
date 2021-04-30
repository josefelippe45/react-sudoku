import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles, theme } from './styles';
import App from './App';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from 'core';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persister } = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
