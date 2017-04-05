import React, {Component} from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './style.css'
class Order extends Component {
    render() {

        return (
            <div>
                <Header />

                <div className="main-container">
                    <div className="main-row">
                        <div className="main-content">
                            <form className="form" name="order" method="post" action="">

                                <h3>Заказ услуги</h3>

                                <div className="form__row">
                                    <div className="form__col-50">

                                        <label for="order__brand" className="">Марка</label>
                                        <div className="form__select form__select-disables">
                                            <select id="order__brand" disabled>
                                                <option selected>Марка</option>
                                                <option>BMW</option>
                                                <option>KIA</option>
                                                <option>AUDI</option>
                                            </select>
                                        </div>

                                        <label for="order__model" className="">Модель</label>
                                        <div className="form__select form__select-disables">
                                            <select id="order__model" disabled>
                                                <option selected>Модель</option>
                                                <option>e320</option>
                                                <option>e310</option>
                                                <option>series 7</option>
                                            </select>
                                        </div>

                                        <label for="order__year" className="">Год</label>
                                        <div className="form__select form__select-disables">
                                            <select id="order__year" disabled>
                                                <option selected>Год</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                            </select>
                                        </div>

                                        <label for="order__vin" className="">Vin-код</label>
                                        <input type="text" name="vin" disabled/>

                                    </div>

                                    <div className="form__col-50">
                                        <label for="order__year" className="">Тип услуги</label>
                                          <div className="form__select">
                                              <select id="order__year">
                                                  <option selected>Тип услуги</option>
                                                  <option>Мотор</option>
                                                  <option>Кузовные работы</option>
                                                  <option>Электрика</option>
                                                </select>
                                              </div>

                                        <label for="order__year" className="">Запчасти</label>
                                        <div className="form__select">
                                            <select id="order__year">
                                                <option selected>Запчасти</option>
                                                <option>Нужны</option>
                                                <option>Не нужны</option>
                                            </select>
                                        </div>

                                        <label for="order__vin" className="">Дата</label>
                                        <input type="text" name="vin"/>

                                        <label>Опишите что нужно делать...</label>
                                        <textarea placeholder="Введите текст"></textarea>
                                    </div>
                                </div>

                                <button className="btn btn--action" type="submit">Создать</button>
                                <button className="btn btn--action" type="submit">Отмена</button>

                            </form>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        data: state.startData.userType,
        ownProps
    }),
    dispatch => ({})
)(Order);
