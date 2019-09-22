import * as React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import { IActions, IStarship } from "../../models/Models";
import { Dispatch } from "redux";
import { getList } from "../../actions/actions";
import { connect } from "react-redux";

interface IProps {
  getList(value: string): IStarship[];
}
interface IState {
  isOpen: boolean;
  modal: boolean;
  search: string;
}

class Header extends React.Component<IProps, IState> {
  state = {
    isOpen: false,
    modal: false,
    search: '',
  };

  /** Показать/скрыть выпадающее мобильное меню */
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  /** Показать/скрыть модальное окно поиска корабля */
  toggleModal = () => {
    this.setState({
      ...this.state,
      modal: !this.state.modal,
      search: '',
    });
  };

  /** Получить список кораблей по поисковому запросу */
  getList = () => {
    this.props.getList(this.state.search);
    this.setState({ modal: !this.state.modal });
  };

  /** Обновление данных в поисковой строке */
  changeSearch = (e) => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <>
        <MDBNavbar color="header grey lighten-2" light expand="md">
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink className="text-dark" to="/">
                  <MDBIcon icon="home" />&nbsp;
                  ВКС России, гроза всея галактики!
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="text-dark" to="/starships-list/null">Наш флот</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <div className="waves-effect waves-light text-dark pt-2 pl-2">
                  <MDBIcon onClick={this.toggleModal} icon="search" />
                </div>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
          <MDBModalHeader toggle={this.toggleModal}>Поиск по наименованию корабля</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="Введите название корабля"
              onChange={this.changeSearch}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBNavLink
              onClick={this.toggleModal}
              to=""
            >Закрыть</MDBNavLink>
            <MDBNavLink
              disabled={!this.state.search}
              onClick={this.getList}
              to={`/starships-list/${this.state.search}`}
            >Найти</MDBNavLink>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
  return {
    getList: (value) => dispatch(getList(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);