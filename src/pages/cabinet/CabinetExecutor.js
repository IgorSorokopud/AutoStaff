import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import defaultAvatar from '../../images/default_avatar.png';
import Rating from '../../components/Rating/index';
import './style.css'
class CabinetExecutor extends Component {

  state = {
    name:'',
    surname:'',
    email:'',
    phone:'',
    make:'',
    model:'',
    year:'',
    vin:''
  };

  handleForm = (e) => {
    e.preventDefault();
    let key,
        dataAuto = {};

    for (key in this.state) {
      dataAuto[key] = this.state[key]
    }

      localStorage.setItem('dataAuto', JSON.stringify(dataAuto));
      this.setStorage(dataAuto);
  }

  handleLogin = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <div>
        <Header />

        <div className="main-container">
            <div className="main-row">
                <div className="main-content">
                    <form className="form" name="order" method="post" action="" onSubmit={this.handleForm}>

                        <h3>Мой кабинет</h3>

                        <div className="form__row">

                            <div className="form__col-50">
                                <div className="small__userpic">
                                    <img src={defaultAvatar}/>
                                </div>

                                <label className="">Имя</label>
                                <input type="text" name="name" onChange={this.handleLogin} value={this.props.state.startData.autorisation.name}/>

                                <label className="">Фамилия</label>
                                <input type="text" name="surname" onChange={this.handleLogin} value={this.props.state.startData.autorisation.surname} />

                                <label for="search__region" className="">Регион</label>
                                <div className="form__select">
                                    <select id="search__region">
                                        <option>Киев</option>
                                        <option>Львов</option>
                                        <option>Черкасы</option>
                                        <option>Ровно</option>
                                        <option>Чернигов</option>
                                        <option>Винница</option>
                                    </select>
                                </div>

                                <label className="">Email</label>
                                <input type="text" name="email" onChange={this.handleLogin} onChange={this.handleLogin} value={this.props.state.startData.autorisation.email} />

                                <label className="">Телефон</label>
                                <input type="text" name="phone" onChange={this.handleLogin} value={this.props.state.startData.autorisation.phone} />
                            </div>

                            <div className="form__col-50">

                                <label for="order__brand" className="">Виды работ</label>
                                <div className="form__select">
                                    <select id="search__type-work">
                                        <option selected="selected">Вид работ</option>
                                        <option>Ходовая</option>
                                        <option>Мотор</option>
                                        <option>Кузовные работы</option>
                                        <option>Электрика</option>
                                        <option>Покраска</option>
                                        <option>Сварка</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn--action" type="submit">Сохранить</button>
                        <button className="btn btn--action" type="submit">Отмена</button>

                    </form>
                </div>
                <div className="main-sidebar">
                    <div className="card">
                        <div className="card__content">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="main-container">
            <div className="main-row">
                <div className="main-content">
                    <div className="cabinet__my-orders-wr">
                        <div className="card__title">Мои заказы</div>

                        <div className="card">
                          <div className="card__left">
                              <div className="card__thumb best__img">
                                  <img className="card__thumb-img" src={defaultAvatar}/>
                              </div>
                          </div>
                          <div className="card__right">
                              <div className="card__content">
                                  <Link to={`/more/`} className="card__title">Антон</Link>
                                  <div className="card__subtitle">Специализация: Механик</div>
                                  <div className="card__adress">г.Киев</div>

                                  <div className="card__corner card__corner--top">
                                  <Rating />
                                  <div>статус: активный</div>
                                  </div>
                              </div>
                          </div>
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
  state => ({
    state: state
  }),
  dispatch => ({})
)(CabinetExecutor);
