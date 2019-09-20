import * as React from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

interface IProps {

}

interface IState {

}

export default class StarshipDetails extends React.Component<IProps, IState> {
  render() {
    return (
      <section className='starship-details'>
        <MDBContainer>
          <MDBRow center>
            <MDBCol size="10">
              <h1 className='heading heading--type1'>Информация по кораблю</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}