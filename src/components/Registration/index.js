import React, { Component } from 'react';
import { connect } from 'react-redux';
import Social from '../Social/index';

class Registration extends Component {

  state = {
    name:'',
    surname:'',
    email:'',
    phone:''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let key,
        autorisation = {},
        hasError;

    for (key in this.state) {
      if (!this.state[key]) {
        styleValidation(key, 'red', 'invalid');
        hasError = true;
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
          <h3 className="modal__title">Регистрация</h3>
                <Social />

                <form className="modal__form" onSubmit={this.handleSubmit}>
                    <input type="radio" onChange={this.handleLogin} id="registration__executor" className="registration__type-user" name="type" value="executor"/>
                    <label for="registration__executor" className="registration__type-user-lable">Исполнитель</label>

                    <input type="radio" onChange={this.handleLogin} id="registration__performer" className="registration__type-user" name="type" value="performer"/>
                    <label for="registration__performer" className="performer__type-user-lable">Заказчик</label>

                    <input className="modal__input" onChange={this.handleLogin} type="text" name="name"
                           placeholder="Имя"/>
                    <input className="modal__input" onChange={this.handleLogin} type="text" name="surname"
                           placeholder="Фамилия"/>
                    <input className="modal__input" onChange={this.handleLogin} type="text" name="email"
                           placeholder="Электронная почта"/>
                    <input className="modal__input" onChange={this.handleLogin} type="text" name="phone"
                           placeholder="Номер телефона"/>
                    <div className="modal__checkbox">
                        <input id="modal__rules" type="checkbox"/>
                        <lable for="modal__rules">С правилами согласен</lable>
                    </div>
                    <input className="btn btn--ghost btn--large" type="submit" value="Зарегестрироваться"/>
                </form>
            </div>
        );
    }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Registration);
