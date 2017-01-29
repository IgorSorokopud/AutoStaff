import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import img1 from '../../images/ocean.jpg';
import img2 from '../../images/matviy.jpeg';
import img3 from '../../images/default_avatar.png';
import Rating from '../../components/Rating/index';

class ListService extends Component {
  render() {
    return (
      <div>
        <div className="service">
        {this.props.users.users.map(function(user, index){
        return(
          <div className="service__item" key={index}>
            <div className="service__wrap-avatar">
              <img src={img3}/>
            </div>
            <div className="service__description">
              <div className="service__title">
                <h2>{user.name} {user.surname}</h2>
                <span className="service__specialization">Специализация: {user.specialization}</span>
              </div>
              <div className="service__skill">
                <ul className="service__skill-list">

                    {user.options.map(function(list, index){
                      return(
                        <li className="service__skill-item" key={index}>{list}</li>
                      )
                    })}

                </ul>
              </div>
              <div className="service__text">{user.description}</div>
              <div className="service__adress">{user.addres}</div>
              <div className="star-rating">
                <Rating />
              </div>
              <div className="service__comment">
                <a href="#">Отзывы: { user.comment } </a>
              </div>
              <div className="service__button">
                <a href="#" className="btn btn-them-border">Заказать услугу</a>
                <a href="#" className="btn btn-them-border">Подробнее</a>
              </div>
            </div>
          </div>
         )
        })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.startData
  }),
  dispatch => ({})
)(ListService);
