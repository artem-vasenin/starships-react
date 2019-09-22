import * as React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody, MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer, MDBIcon,
  MDBListGroup,
  MDBRow,
} from "mdbreact";
import {IActions, IGlobalState, IStarship} from "../../models/Models";
import {connect} from "react-redux";
import Item from "./Item";
import {changePage, getList} from "../../actions/actions";
import {Dispatch} from "redux";

interface IProps {
  isLoading: boolean;
  isError: boolean;
  errorText: string;
  list: IStarship[];
  nextPage: string | null,
  prevPage: string | null,
  count: number,
  getList(value: string | null): IStarship[];
  changePage(value: string): IStarship[];
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

                  <div className='d-flex justify-content-between'>
                    {  }
                    <MDBBtn
                      color="primary"
                      rounded
                      disabled={!this.props.prevPage}
                      onClick={() => this.props.changePage(this.props.prevPage)}
                    >
                      <MDBIcon icon="angle-double-left" size="1x"/>
                    </MDBBtn>
                    <MDBBtn
                      color="primary"
                      rounded
                      disabled={!this.props.nextPage}
                      onClick={() => this.props.changePage(this.props.nextPage)}
                    >
                      <MDBIcon icon="angle-double-right" size="1x"/>
                    </MDBBtn>
                  </div>
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
    nextPage: state.nextPage,
    prevPage: state.prevPage,
    count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
  return {
    getList: (value) => dispatch(getList(value)),
    changePage: (value) => dispatch(changePage(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipList);