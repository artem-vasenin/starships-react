import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import Page from "./pages/Page";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

ReactDOM.render(
  <Provider store={store}>
    <Header/>
    <BrowserRouter>
      <Page/>
    </BrowserRouter>
    <Footer/>
  </Provider>,
  document.getElementById("app")
);