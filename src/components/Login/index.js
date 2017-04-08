import React, { Component } from 'react';
import { connect } from 'react-redux';
import Social from '../Social/index';

class Login extends Component {

  state = {
    password: '',
    name: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let key,
        autorisation = {},
        hasError = false;

    for (key in this.state) {
      if (!this.state[key]) {
        hasError = true;
        styleValidation(key, 'red', 'invalid');
      } else {
        styleValidation(key, 'green', 'invalid');

        autorisation[key] = this.state[key];
        autorisation.registered = true;
      }
    }

    if(!hasError) {
      this.setStorage(autorisation);
      window.location.reload();
    }

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
        <Social />
        <form className="modal__form" onSubmit={this.handleSubmit}>
          <input className="modal__input" onChange={this.handleLogin} type="text" name="name" placeholder="Логин"/>
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
