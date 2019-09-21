import * as React from 'react';
import {
  MDBCard,
  MDBCardBody, MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBRow,
} from "mdbreact";
import {IActions, IGlobalState, IStarship} from "../../models/Models";
import {connect} from "react-redux";
import Item from "./Item";
import {getList} from "../../actions/actions";
import {Dispatch} from "redux";

interface IProps {
  isLoading: boolean;
  isError: boolean;
  errorText: string;
  list: IStarship[];
  getList(value: string | null): IActions;
}

interface IState {
  list: IStarship[];
  isError: boolean;
  errorText: string;
  isLoading: boolean;
  page: number;
}

class StarshipList extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list || [],
      isError: this.props.isError || false,
      errorText: this.props.errorText || '',
      isLoading: this.props.isLoading || false,
      page: 1,
    }
  }

  componentDidMount(): void {
    this.props.getList(null);
  }

  getSnapshotBeforeUpdate(newProps, state) {
    if (newProps.list !== state.list) {
      return {
        list: newProps.list
      };
    }
  }

  render() {
    return (
      <section className='starships-list'>
        <MDBContainer>
          <MDBRow center>
            <MDBCol size="12" sm="12" lg="10">
              <MDBCard style={{ width: "100%" }}>
                <MDBCardBody>
                  <MDBCardTitle>Список кораблей</MDBCardTitle>
                  { this.props.isLoading && (
                    <MDBRow center>
                      <MDBCol size="12" sm="12" lg="10">
                        <div className="text-center">
                          <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  )}
                  { this.props.isError && this.props.errorText && (
                    <MDBCardText>
                      {this.props.errorText}
                    </MDBCardText>
                  )}
                  <MDBListGroup className={'pt-3 pb-3'}>
                    { !this.props.isLoading
                        && this.props.list.map((item: IStarship, index: number) => (
                      <Item key={index} item={item}>{ item.name }</Item>
                    )) }
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

const mapStateToProps = (state: IGlobalState) => ({
    isLoading: state.isLoading,
    isError: state.isError,
    errorText: state.errorText,
    list: state.starShipsList,
});

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => ({
    getList: (value: string | null) => dispatch(getList(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(StarshipList);