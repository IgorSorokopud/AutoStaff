import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Login extends Component {

  render() {

    return (
      <div className="modal">
        <h3 className="modal__title">Войти</h3>
        <ul className="social__list">
          <li className="social__item">
          <a href="#">
            <i className="social__icon fa fa-facebook" aria-hidden="true"></i>
          </a>
          </li>
          <li className="social__item">
          <a href="#">
            <i className="social__icon fa fa-google-plus" aria-hidden="true"></i>
          </a>
          </li>
          <li className="social__item">
          <a href="#">
            <i className="social__icon fa fa-odnoklassniki" aria-hidden="true"></i>
          </a>
          </li>
          <li className="social__item">
          <a href="#">
            <i className="social__icon fa fa-twitter" aria-hidden="true"></i>
          </a>
          </li>
          <li className="social__item">
          <a href="#">
            <i className="social__icon fa fa-vk" aria-hidden="true"></i>
          </a>
          </li>
        </ul>
        <form method="POST" actions="/" className="modal__form">
          <input className="modal__input" type="text" name="phone_email" placeholder="E-mail или телефон"/>
          <input className="modal__input" type="password" name="password" placeholder="Пароль"/>
          <input type="submit" className="btn btn-them-border" value="Войти"/>
          <a className="modal__forgot-password">Забыли пароль?</a>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Login);
