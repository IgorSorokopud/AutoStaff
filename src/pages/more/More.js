import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/Sidebar';
import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Rating from '../../components/Rating/index';
import './style.css';

import img1 from '../../images/ocean.jpg';
import img2 from '../../images/matviy.jpeg';
import img3 from '../../images/default_avatar.png';

class More extends Component {
  render() {
    let currentMore = this.props.ownProps.params.id;
    let userMore = this.props.users.users[currentMore];
    console.log(userMore);
    return(
      <div>
        <Header />
        <Menu />

        <div className="main-container">
          <div className="main-row clear">
            <div className="main-content">

              <div className="card">
                <div className="card__content">
                  <div className="card__title">{userMore.name} {userMore.surname}</div>
                  <div className="card__subtitle">Специализация: {userMore.specialization}</div>
                  <div className="card__description">{userMore.description}</div>
                  <div>{userMore.addres}</div>
                  <ul className="card__list">
                    {userMore.options.map(function(list, index){
                      return(<li className="card__list-item" key={index}>{list}</li>)
                    })}
                  </ul>
                  <div className="star-rating">
                    <Rating />
                  </div>
                  <div className="service__comment">
                    <a href="#">Отзывы: { userMore.comment } </a>
                  </div>
                  <div className="service__button">
                    <Link to="" className="btn btn--ghost">Заказать услугу</Link>
                    <Link to="/" className="btn btn--ghost">Назад</Link>
                  </div>
                </div>
              </div>

            </div>
            <div className="main-sidebar">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="service more">
          <div className="service__wrap-avatar">
            <img src={img3}/>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    state: state,
    users: state.startData,
    ownProps
  }),
  dispatch => ({})
)(More);
