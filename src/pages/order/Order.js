import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './style.css'
class Order extends Component {
  render() {

    return(
      <div>
        <Header />

        <div className="main-container">
          <div className="main-row clear">
            <div className="main-content">

              <div className="card">
                <div className="card__content">
                  <div className="card__title order__title">Заказ услуги</div>
                  <div className="card order__content">
                      <form name="order" method="post" action="">
                      <div className="order__container">
                          <div className="order__input-item">
                              <label for="order__brand" className="">Марка</label>
                              <select id="order__brand">
                                  <option>BMW</option>
                                  <option>KIA</option>
                                  <option>AUDI</option>
                              </select>
                          </div>

                          <div className="order__input-item">
                              <label for="order__model" className="">Модель</label>
                              <select id="order__model">
                                 <option>e320</option>
                                 <option>e310</option>
                                 <option>series 7</option>
                              </select>
                          </div>

                          <div className="order__input-item">
                              <label for="order__year" className="">Год</label>
                              <select id="order__year">
                                 <option>2017</option>
                                 <option>2016</option>
                                 <option>2015</option>
                              </select>
                          </div>

                          <div className="order__input-item">
                              <label for="order__vin" className="">Vin-код</label>
                              <input type="text" name="vin"/>
                          </div>
                      </div>

                      <div className="order__container">
                      <div className="order__input-item">
                          <label for="order__year" className="">Тип услуги</label>
                          <select id="order__year">
                             <option>Мотор</option>
                             <option>Кузовные работы</option>
                             <option>Электрика</option>
                          </select>
                      </div>

                      <div className="order__input-item">
                          <div>Нужны запчасти</div>
                          <input type="radio" id="order__spares-yes" name="spares" value="yes"/>
                          <label for="order__spares-yes" className="">да</label>

                          <input type="radio" id="order__spares-no" name="spares" value="no"/>
                          <label for="order__spares-no" className="">нет</label>
                      </div>
                      </div>

                      <div className="order__container">
                          <div className="order__input-item">
                              <div>Когда нужно выполнить ремонт</div>
                          </div>
                      </div>

                      </form>
                  </div>
                  <div className=""></div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    data: state.startData.userType,
    ownProps
  }),
  dispatch => ({})
)(Order);
