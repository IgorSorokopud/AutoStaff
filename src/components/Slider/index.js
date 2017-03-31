import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../../images/images1.jpeg';
import banner from '../../images/banner.png';

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
          <div>
            <img src={banner}/>
            <div className="slider__banner-content">Скидка 5% при заказе автозапчастей</div>
            <a href="#" className="btn btn-them-border">Подробнее</a>
          </div>
          <div><img src={img}/></div>
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
