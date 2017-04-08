import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchItem} from '../../actions/search';

class Search extends Component {

    handleLogin = (event) => {
        this.props.search(event.target.value);
    };

    render() {
        return (
            <div className="form form--main">
                <form name="search" method="post" action="" onSubmit={this.handleSubmit}>

                    <div className="form__select">
                        <select id="search__region" name="typeSearch" onChange={this.handleLogin}>
                            <option value="" selected="selected">Я ищу</option>
                            <option value="customer">Закачиков</option>
                            <option value="executor">Исполнителей</option>
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
    dispatch => ({
        search: (data) => {
            dispatch(searchItem(data));
        }
    })
)(Search);
