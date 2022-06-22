import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./redux/reduxStore";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App/>
      </PersistGate>
    </Provider>
);