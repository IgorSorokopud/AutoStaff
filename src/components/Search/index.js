import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Component {

    render() {
        return (
            <div className="form form--main">
                <form name="search" method="post" action="">

                    <div className="form__select">
                        <select id="search__region">
                            <option selected="selected">Я ищу</option>
                            <option>Закачиков</option>
                            <option>Исполнителей</option>
                        </select>
                    </div>

                    <div className="form__select">
                        <select id="search__region">
                            <option selected="selected">Регион</option>
                            <option>Киев</option>
                            <option>Львов</option>
                            <option>Черкасы</option>
                            <option>Ровно</option>
                            <option>Чернигов</option>
                            <option>Винница</option>
                        </select>
                    </div>

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

                    <button className="btn btn--action btn--large" type="submit">Найти</button>
                </form>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(Search);
