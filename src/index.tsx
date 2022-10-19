import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import createAppStore from './store/index';
import { apiUrl } from './constants/constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createAppStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={apiUrl}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
