import * as React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer, MDBDataTable,
  MDBRow
} from "mdbreact";
import {getDetailsPage} from "../../actions/actions";
import {connect} from "react-redux";
import {IActions, IGlobalState, IStarship, ITable} from "../../models/Models";
import {Dispatch} from "redux";

interface IProps {
  isLoading: boolean;
  isError: boolean,
  errorText: string,
  starShipsDetails: IStarship,
  getDetailsPage(value: string): IStarship;
  match: any;
}
interface IState {
  data: ITable;
}

class StarshipDetails extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        columns: [
          {
            label: 'Наименование',
            field: 'name',
            sort: 'asc',
            width: 400,
          },
          {
            label: 'Зачение',
            field: 'value',
            sort: 'asc',
            width: 400,
          },
        ],
        rows: [],
      },
    }
  }

  /** Получение детальной информации по ID корабля */
  getDetailsPage = () => {
    this.props.getDetailsPage(`https://swapi.co/api/starships/${this.props.match.params.id}/`);
  };

  /** Подгружаем данные когда компонент примонтирован */
  componentDidMount(): void {
    this.getDetailsPage();
  }

  /** Ждем появления данных и добавляем в стейт информацию по кораблю */
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      data: {
        ...prevState.data,
        rows: nextProps.starShipsDetails ? nextProps.starShipsDetails.rows : []
      }
    };
  }

  render() {
    const { starShipsDetails, isLoading, isError, errorText } = this.props;
    return (
      <section className='starship-details'>
        <MDBContainer>
          <MDBRow center>
            <MDBCol size="10">
              { isLoading && (
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
              { isError && errorText && (
                <MDBCardText>
                  {errorText}
                </MDBCardText>
              )}
              { !isLoading && starShipsDetails && (
                <MDBCard style={{ width: "100%" }}>
                  <MDBCardImage className="img-fluid" src="https://vignette.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest/scale-to-width-down/1000?cb=20180903230846" waves />
                  <MDBCardBody>
                    <MDBCardTitle>{ starShipsDetails.name }</MDBCardTitle>
                    <MDBDataTable
                      paging={false}
                      data={this.state.data}
                    />
                  </MDBCardBody>
                </MDBCard>
              )}
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
  starShipsDetails: state.starShipsDetails,
});

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
  return {
    getDetailsPage: (value) => dispatch(getDetailsPage(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipDetails);