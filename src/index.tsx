import React from "react";
import { render } from "react-dom";
import App from "./App";
import './index.css'
import { Provider } from 'react-redux'
import { setupStore } from "./store/store";
const store = setupStore()
const root = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
    </Provider>, root);