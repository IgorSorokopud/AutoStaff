import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import img from '../../images/images1.jpeg';
import banner from '../../images/banner.png';
import bannerA from './img/servicio.jpg';

var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider__main">
        <Slider {...settings}>
          <div className="slider__item">
            <img className="slider__item-img" src={bannerA}/>
            <div className="slider__banner-content">Скидка 5% при заказе автозапчастей</div>
            <a href="#" className="btn btn-them-border">Подробнее</a>
          </div>
          <div>
            <img src={img}/>
          </div>
        </Slider>
      </div>
    );
  }
});

export default connect(
  state => ({
    slider: state
  }),
  dispatch => ({})
)(SimpleSlider);
