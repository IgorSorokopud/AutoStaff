import React, { Component } from 'react';
import Header from '../../components/Header/index';
import SimpleSlider from '../../components/Slider/index';
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
        <div className="main-wrapper">
          <SimpleSlider />
          <Menu />

            <div className="service more">
              <div className="service__wrap-avatar">
                <img src={img3}/>
              </div>
              <div className="service__title">
                <h2>{userMore.name} {userMore.surname}</h2>
                <span className="service__specialization">Специализация: {userMore.specialization}</span>
              </div>

              <div className="service__wrapper">
                <div className="service__skill">
                  <ul className="service__skill-list">
                    {userMore.options.map(function(list, index){
                      return(<li className="service__skill-item" key={index}>{list}</li>)
                    })}
                  </ul>
                </div>
                <div className="service__text">{userMore.description}</div>
              </div>

              <div className="service__adress">{userMore.addres}</div>
              <div className="star-rating">
                <Rating />
              </div>
              <div className="service__comment">
                <a href="#">Отзывы: { userMore.comment } </a>
              </div>
            </div>

          <Footer />
        </div>
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
