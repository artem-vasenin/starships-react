import * as React from 'react';
import {
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";
import {IStarship} from "../../models/Models";

interface IProps {
  item: IStarship;
}

interface IState {
  showDetails: boolean;
}

export default class Item extends React.Component<IProps, IState> {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false,
    }
  }

  showDetails = () => this.setState({
    showDetails: this.state.showDetails ? false : true
  });

  goToDetailsPage = () => {
      console.log(this.props.item.url);
  };

  render() {
    const { item } = this.props;
    return (
      <MDBListGroupItem onClick={this.showDetails}>
        <h6 className="text-uppercase">{ item.name }</h6>
        { this.state.showDetails && (
          <div>
            <MDBListGroup className={'pt-3 pb-3'}>
              <MDBListGroupItem>
                <MDBIcon icon="chart-bar" size="lg"/>&nbsp;
                { item.starship_class }
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon icon="euro-sign" size="lg"/>&nbsp;
                { item.cost_in_credits }
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon icon="angle-double-up" size="lg"/>&nbsp;
                { item.length }
              </MDBListGroupItem>
              <MDBListGroupItem>
                <MDBIcon icon="calendar-alt" size="lg"/>&nbsp;
                { item.consumables }
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBBtn color="primary" onClick={this.goToDetailsPage}>Подробнее</MDBBtn>
          </div>
        )}
      </MDBListGroupItem>
    );
  }
}