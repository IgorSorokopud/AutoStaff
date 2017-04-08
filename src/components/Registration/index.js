import React, {Component} from 'react';
import {connect} from 'react-redux';
import Social from '../Social/index';

class Registration extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        phone: ''
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

        if (!hasError) {
            this.setStorage(autorisation);
            window.location.reload();
        }

        function styleValidation(name, color, text) {
            let node = document.getElementsByName(name)[0];
            node.style.border = '1px solid ' + color;
        }
    };

    setStorage = (autorisation) => {
        localStorage.setItem('autorisation', JSON.stringify(autorisation));
    };

    handleLogin = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {

        return (
            <div className="form">
                <h3 className="form__title form--centered">Регистрация</h3>
                <div className="form__elem form--centered">
                    <Social />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form__elem form__radio">
                        <div className="form__radio-full">
                            <input type="radio"
                                   onChange={this.handleLogin}
                                   id="registration__executor"
                                   name="type" value="executor"/>
                            <label for="registration__executor">Исполнитель</label>
                        </div>

                        <div className="form__radio-full">
                            <input type="radio"
                                   onChange={this.handleLogin}
                                   id="registration__performer"
                                   name="type"
                                   value="performer"/>
                            <label for="registration__performer">Заказчик</label>
                        </div>
                    </div>
                    <div className="form__elem">
                        <input onChange={this.handleLogin} type="text" name="name" placeholder="Имя"/>
                    </div>
                    <div className="form__elem">
                        <input onChange={this.handleLogin} type="text" name="surname" placeholder="Фамилия"/>
                    </div>
                    <div className="form__elem">
                        <input onChange={this.handleLogin} type="text" name="email" placeholder="Электронная почта"/>
                    </div>
                    <div className="form__elem">
                        <input onChange={this.handleLogin} type="text" name="phone" placeholder="Номер телефона"/>
                    </div>
                    <div className="form__elem">
                        <input id="modal__rules" type="checkbox"/>
                        <label for="modal__rules">С правилами согласен</label>
                    </div>
                    <button className="btn btn--ghost btn--large" type="submit">Зарегестрироваться</button>
                </form>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(Registration);
