import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modal';
import logo from '../../images/main_logo.png';

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

            <div className="header__top">
                <div className="header__container">
                    <a href="#" className="header__hint">Как заказать ремонт</a>
                    <a href="#" className="header__hint">Как стать исполнителем</a>
                    <div className="header__social">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-google-plus"></a>
                    </div>
                </div>
            </div>

          <div className="header__container">

              {/* logo */}
              <a href="/" className="header__logo">
                <img src={logo} alt="logo"/>
              </a>

              {/* buttons */}
              {this.props.state.startData.registered ?
                <div className="header__button">
                  {this.props.state.startData.autorisation.name}
                  <button onClick={clearStorage}>Выход</button>
                </div> :
                <div className="header__buttons">
                  <a href="#" onClick={login.bind(this, 'Customer')} className="btn btn--primary">Заказать ремонт</a>
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
