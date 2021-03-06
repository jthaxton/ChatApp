import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import * as serviceWorker from './serviceWorker';
import jwt_decode from "jwt-decode";
import * as APIUtil from "./util/session_api_util";
import configureStore from "./store/store";

// import registerServiceWorker from "./registerServiceWorker";
const HOST = window.location.origin.replace(/^http/, 'ws')
const ws = new WebSocket(HOST);
document.addEventListener('DOMContentLoaded', () => {

    let store = configureStore();
    // Check for token
    if (localStorage.jwtToken) {
        // Set auth token header auth
        APIUtil.setAuthToken(localStorage.jwtToken);
        // Decode token and get user info and exp
        const decoded = jwt_decode(localStorage.jwtToken);
        // Set user and isAuthenticated
        store.dispatch(APIUtil.setCurrentUser(decoded));

        // Check for expired token
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            // Logout user
            store.dispatch(APIUtil.logoutUser());
            // Redirect to login
            window.location.href = '/login';
        }
    }

    window.getState = store.getState;
    const root = document.getElementById('root');    
    ReactDOM.render(<Root store = {store} ws={ws}/>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// registerServiceWorker();

});