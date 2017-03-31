import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class Search extends Component {

  render() {
    return (
      <div className="search">
        <div className="search__radio">
          <form name="search" method="post" action="">
            <input type="radio" id="search__customer" className="search__type-user" name="search" value="customer"/>
            <label for="search__customer" className="search__type-user-lable">Заказы</label>
            <input type="radio" id="search__executor" className="search__type-user" name="search" value="executor"/>
            <label for="search__executor" className="search__type-user-lable">Исполнители</label>
          </form>
        </div>

        <div className="search__select">
          <div>
            <label for="search__region">Регион</label>
            <select className="search__region" id="search__region">
              <option>Киев</option>
              <option>Львов</option>
              <option>Черкасы</option>
              <option>Ровно</option>
              <option>Чернигов</option>
              <option>Винница</option>
            </select>
          </div>

          <div>
            <label for="search__type-work">Вид работ</label>
            <select className="search__type-work" id="search__type-work">
              <option>Ходовая</option>
              <option>Мотор</option>
              <option>Кузовные работы</option>
              <option>Электрика</option>
              <option>Покраска</option>
              <option>Сварка</option>
            </select>
          </div>
        </div>

        <a href="#" className="btn btn-them-border">Найти</a>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Search);
