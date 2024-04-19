import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AuthContextProvider from './contexts/AuthContext.jsx';
import OrderContextProvider from './contexts/OrderContext.jsx';
import './index.css';
import { store } from './redux/store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </OrderContextProvider>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
