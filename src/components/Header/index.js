import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/main_logo.png';
import './style.css';

class Header extends Component {

  render() {
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
                <a href="/" className="btn btn-them-green">Войти</a>
                <a href="/" className="btn btn-them-green">Заказать ремонт</a>
                <a href="/" className="btn btn-them-green">Исполнитель</a>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    hotBlog: state
  }),
  dispatch => ({})
)(Header);
