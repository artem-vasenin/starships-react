import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import StarShipDetails from './starship-details/StarshipDetails';
import StarShipsList from './starship-list/StarshipList';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../assets/styles/main.scss';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default class Page extends React.Component {
  render() {
    return (
    <div className={'site-wrap'}>
      <Header/>
      <main className="main py-5">
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/starship-details/:id' component={ StarShipDetails }/>
          <Route path='/starships-list/:search' component={ StarShipsList }/>
        </Switch>
      </main>
      <Footer/>
    </div>
    );
  }
};
