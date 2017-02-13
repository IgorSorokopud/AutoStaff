import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';
import logo from '../../images/main_logo.png';
import './style.css';

class Header extends Component {

  render() {

    function login(data) {
      this.props.modal({mode:data, isShowingModal:true});
    }

    return (
      <div>
        <div className="header">
          <div className="header__wrapper clear">

              {/* logo */}
              <a href="/" className="header__logo">
                <img src={logo} alt="logo"/>
              </a>

              {/* buttons */}
              <div className="header__button">
                <a href="#" onClick={login.bind(this, 'Login')} className="btn btn-them-green">Войти</a>
                <a href="#" className="btn btn-them-green">Заказать ремонт</a>
                <a href="#" onClick={login.bind(this, 'Performer')} className="btn btn-them-green">Исполнитель</a>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    modal: (data) => {
      dispatch(showModal(data));
    }
  })
)(Header);
