import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';
import logo from '../../images/main_logo.png';
import './style.css';

class Header extends Component {

  render() {

    function login(data) {
      this.props.modal({mode:data, isShowingModal:true});
    };

    function clearStorage () {
      localStorage.clear();
      window.location.reload();
    };

    return (
      <div>
        <div className="header">
          <div className="header__wrapper clear">

              {/* logo */}
              <a href="/" className="header__logo">
                <img src={logo} alt="logo"/>
              </a>

              <a href="#" className="header__hint">Как заказать ремонт</a>
              <a href="#" className="header__hint">Как стать исполнителем</a>

              {/* buttons */}
              {this.props.state.startData.registered ?
                <div className="header__button">
                  {this.props.state.startData.autorisation.phone_email}
                  <button onClick={clearStorage}>Выход</button>
                </div> :
                <div className="header__button">
                  <a href="#" className="btn btn--primary">Заказать ремонт</a>
                  <a href="#" onClick={login.bind(this, 'Performer')} className="btn btn--primary">Исполнитель</a>
                  <a href="#" onClick={login.bind(this, 'Login')} className="btn btn--primary">Войти</a>
                </div>
              }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    modal: (data) => {
      dispatch(showModal(data));
    }
  })
)(Header);
