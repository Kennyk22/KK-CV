import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import Reducer from './Redux/Reducer';
import { Provider } from 'react-redux/es/exports';

const customizedMiddleware = getDefaultMiddleware()

const store = configureStore({
  reducer: Reducer, 
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
    serializableCheck: false
  })
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
