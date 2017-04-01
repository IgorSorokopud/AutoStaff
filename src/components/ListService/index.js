import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import defaultAvatar from '../../images/default_avatar.png';
import Rating from '../../components/Rating/index';
import { Link } from 'react-router';

class ListService extends Component {
  render() {
    return (
      <div>
        <div className="service">
        {this.props.users.users.map(function(user, index){
        return(
          <div className="card" key={index}>
            <div className="card__left">
                <div className="card__thumb">
                    <img className="card__thumb-img" src={user.photo}/>
                </div>
            </div>
            <div className="card__right">
                <div className="card__content">
                    <Link to={`/more/${user.id}`} className="card__title">{user.name} {user.surname}</Link>
                    <div className="card__subtitle">Специализация: {user.specialization}</div>
                    <div className="card__excerpt">{user.description}</div>
                    <ul className="card__list">
                        {user.options.map(function(list, index){
                            if(index < 7) {
                                return(<li className="card__list-item" key={index}>{list}</li>)
                            }
                        })}
                    </ul>
                    <div>{user.addres}</div>
                    <div className="star-rating">
                        <Rating />
                    </div>
                    <div className="service__comment">
                        <a href="#">Отзывы: { user.comment } </a>
                    </div>
                    <div className="service__button">
                        <Link to="/" className="btn btn--ghost">Заказать услугу</Link>
                        <Link to={`/more/${user.id}`}className="btn btn--ghost">Подробнее</Link>
                    </div>
                </div>
            </div>
          </div>
         )
        }.bind(this))}
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
