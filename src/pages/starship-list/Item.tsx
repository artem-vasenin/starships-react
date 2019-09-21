import * as React from 'react';
import {
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";
import { IStarship } from "../../models/Models";
import { Link } from 'react-router-dom';

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
            <Link to={`/starship-details/${item.id}`}>Подробнее</Link>
          </div>
        )}
      </MDBListGroupItem>
    );
  }
}