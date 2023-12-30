import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
import Links from './Routes/Links';
import store from './Redux/store/Store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <Provider store={store}>
    <Links></Links>
    </Provider>
 </>
);
