import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Login extends Component {

  state = {
    password: '',
    phone_email: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let key;
    let autorisation = {};

    for (key in this.state) {
      if (!this.state[key]) {
        styleValidation(key, 'red', 'invalid');
      } else {
        styleValidation(key, 'green', 'invalid');

        autorisation[key] = this.state[key];
        autorisation.registered = true;
        window.location.reload();
      }
    }

    this.setStorage(autorisation);

    function styleValidation (name, color, text) {
      let node = document.getElementsByName(name)[0];
      node.style.border = '1px solid ' + color;
    }
  }

  setStorage = (autorisation) => {
    localStorage.setItem('autorisation', JSON.stringify(autorisation));
  }

  handleLogin = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

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
        <form className="modal__form" onSubmit={this.handleSubmit}>
          <input className="modal__input" onChange={this.handleLogin} type="text" name="phone_email" placeholder="Логин"/>
          <input className="modal__input" onChange={this.handleLogin} type="password" name="password" placeholder="Пароль"/>
          <input className="btn btn-them-border" type="submit" value="Войти"/>
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
