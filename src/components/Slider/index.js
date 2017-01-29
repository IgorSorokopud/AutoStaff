import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../../images/images1.jpeg';

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
          <div><img src={img}/></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
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
