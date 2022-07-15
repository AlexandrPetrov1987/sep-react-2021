import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import {createStore} from "react-dom/client";

import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let store = createStore();

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

