import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { connect } from 'react-redux';

class OrderExecutor extends Component {

    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="main-row">
                        <div className="main-content">
                            <form className="form form--main" name="order" method="post" action="">

                                <h3>Отклик на заявку</h3>

                                <div className="form__row">
                                    <div className="form__col-50">
                                        <label className="">Имя</label>
                                        <input type="text" name="name" disabled onChange={this.handleLogin}
                                               value={this.props.state.startData.autorisation.name}/>

                                        <label className="">Фамилия</label>
                                        <input type="text" name="surname" disabled onChange={this.handleLogin}
                                               value={this.props.state.startData.autorisation.surname}/>

                                        <label for="search__region" className="">Регион</label>
                                        <div className="form__select">
                                            <select id="search__region" disabled>
                                                <option>Киев</option>
                                                <option>Львов</option>
                                                <option>Черкасы</option>
                                                <option>Ровно</option>
                                                <option>Чернигов</option>
                                                <option>Винница</option>
                                            </select>
                                        </div>

                                        <label className="">Email</label>
                                        <input type="text" name="email" disabled onChange={this.handleLogin}
                                               onChange={this.handleLogin}
                                               value={this.props.state.startData.autorisation.email}/>

                                        <label className="">Телефон</label>
                                        <input type="text" name="phone" disabled onChange={this.handleLogin}
                                               value={this.props.state.startData.autorisation.phone}/>

                                    </div>

                                    <div className="form__col-50">
                                        <label for="order__brand" className="">Виды работ</label>
                                        <div className="form__select">
                                            <select id="search__type-work">
                                                <option selected="selected">Вид работ</option>
                                                <option>Ходовая</option>
                                                <option>Мотор</option>
                                                <option>Кузовные работы</option>
                                                <option>Электрика</option>
                                                <option>Покраска</option>
                                                <option>Сварка</option>
                                            </select>
                                        </div>

                                        <div className="form__elem">
                                            <label>Опишите свой опыт</label>
                                            <textarea placeholder="Введите текст"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn--action" type="submit">Создать</button>
                                <button className="btn btn--action" type="submit">Отмена</button>

                            </form>
                        </div>
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
    dispatch => ({})
)(OrderExecutor);
