import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// important: use interceptors to handle errors globally
axios.interceptors.request.use(req => {
    console.log(req);
    return req;
}, err => {
    console.log(err);
    return Promise.reject(err);
});

axios.interceptors.response.use(res => {
    console.log(res);
    return res;
}, err => {
    console.log(err);
    return Promise.reject(err);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
