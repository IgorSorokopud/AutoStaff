import React, {Component} from 'react';
import {connect} from 'react-redux';
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

        if (!hasError) {
            this.setStorage(autorisation);
            window.location.reload();
        }

        function styleValidation(name, color, text) {
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
            <div className="form">
                <h3 className="form__title form--centered">Войти</h3>
                <div className="form__elem form--centered">
                    <Social />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form__elem">
                        <input onChange={this.handleLogin}
                               type="text"
                               name="name"
                               placeholder="Логин"/>
                    </div>
                    <div className="form__elem">
                        <input onChange={this.handleLogin}
                               type="password"
                               name="password"
                               placeholder="Пароль"/>
                    </div>
                    <button className="btn btn--primary btn--full" type="submit">Войти</button>
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
