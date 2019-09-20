import * as React from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

interface IProps {

}

interface IState {

}

export default class StarshipList extends React.Component<IProps, IState> {
  render() {
    return (
      <section className='starships-list'>
        <MDBContainer>
          <MDBRow center>
            <MDBCol size="10">
              <h1 className='heading heading--type1'>Списаок кораблей</h1>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}