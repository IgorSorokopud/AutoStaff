import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/main_logo.png';
import './style.css';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer__column footer__column-1">
          <a href="#" className="footer__logo">
            <img src={logo}/>
          </a>
          <div className="footer__social">
            <ul className="social__list">
            <li className="social__item">
              <a href="#">
                <i className="social__icon fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social__item">
              <a href="#">
                <i className="social__icon fa fa-google-plus" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social__item">
              <a href="#">
                <i className="social__icon fa fa-odnoklassniki" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social__item">
              <a href="#">
                <i className="social__icon fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social__item">
              <a href="#">
                <i className="social__icon fa fa-vk" aria-hidden="true"></i>
              </a>
            </li>
            </ul>
          </div>
        </div>

        <div className="footer__column footer__column-2">
          <ul className="footer__list">
            <li className="footer__item"><a href="#">О нас</a></li>
            <li className="footer__item"><a href="#">О проекте</a></li>
            <li className="footer__item"><a href="#">Правила</a></li>
            <li className="footer__item"><a href="#">Написать разроботчикам</a></li>
          </ul>
        </div>

        <div className="footer__column footer__column-3">
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <a href="#">
                тел: 044 555 55 5
                </a>
            </li>
            <li className="footer__item">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <a href="#">
                e-mail: as@gmail.com
              </a>
            </li>
            <li className="footer__item">
              <i className="fa fa-wrench" aria-hidden="true"></i>
              <a href="#">Услуги</a>
            </li>
            <li className="footer__item">
            <i className="fa fa-car" aria-hidden="true"></i>
              <a href="#">Авто staff в Украине</a>
            </li>
          </ul>
        </div>

        <div className="footer__github">
          <a href="https://github.com/IgorSorokopud" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    hotBlog: state
  }),
  dispatch => ({})
)(Footer);
