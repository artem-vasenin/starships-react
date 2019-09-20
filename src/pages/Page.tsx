import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import StarShipDetails from './starship-details/StarshipDetails';
import StarShipsList from './starship-list/StarshipList';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../assets/styles/main.scss';
import {Provider} from "react-redux";

// const img = require('./assets/images/test.jpg');
// <img src={img} alt="Image"/>

export default class Page extends React.Component {
  render() {
    return (
      <main className="main py-5">
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/starship-details/' component={ StarShipDetails }/>
          <Route path='/starships-list/' component={ StarShipsList }/>
        </Switch>
      </main>
    );
  }
};
