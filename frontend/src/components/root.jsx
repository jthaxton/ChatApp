import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';
import App from '../App';

const Root = ({ws, client, store}) => (
    <Provider store={store}>
      <HashRouter>
        <App client={client} ws={ws}/>
      </HashRouter>
    </Provider>
);

export default Root