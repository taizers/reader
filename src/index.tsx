import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import createAppStore from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createAppStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
