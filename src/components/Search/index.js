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
            <label for="search__customer" className="search__type-user-lable">Заказчик</label>
            <input type="radio" id="search__executor" className="search__type-user" name="search" value="executor"/>
            <label for="search__executor" className="search__type-user-lable">Исполнитель</label>
          </form>
        </div>

        <label for="search__region">Регион</label>
        <select className="search__region" id="search__region">
          <option>Киев</option>
        </select>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Search);
