import * as React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdbreact";
import { Link } from 'react-router-dom';

export default class Home extends React.Component<any, any> {
  render() {
    return (
      <section className='home'>
        <MDBContainer>
          <MDBRow center>
            <MDBCol size="12" xs="12" lg="10">
              <MDBCard style={{ width: "100%" }}>
                <MDBCardImage className="img-fluid" src="https://vignette.wikia.nocookie.net/starwars/images/d/da/Executorbridge.jpg/revision/latest/scale-to-width-down/1000?cb=20120110005354" waves />
                <MDBCardBody>
                  <MDBCardTitle>Мощь имперского флота несокрушима</MDBCardTitle>
                  <MDBCardText>
                    Соединение сил привело к необходимому сочетанию воздушной и космической сферы как смежных областей, для более удобного контроля за ними. Создание данных сил обусловлено ситуацией на мировой арене, изменениями при перевооружении других государств, увеличением значимости космического сектора для военно-экономического и социального прогресса.
                  </MDBCardText>
                  <MDBRow end>
                    <MDBCol size="4" style={{ textAlign: "right" }}>
                      <Link to="/starships-list/null">Наш флот</Link>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}