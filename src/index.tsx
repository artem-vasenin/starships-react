import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import Page from "./pages/Page";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Page/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);