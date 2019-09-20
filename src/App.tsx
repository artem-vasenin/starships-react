import * as React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './assets/styles/main.scss';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

const img = require('./assets/images/test.jpg');

export default class App extends React.Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12">
            <h1>My React App!</h1>
            <img src={img} alt="Image"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};
