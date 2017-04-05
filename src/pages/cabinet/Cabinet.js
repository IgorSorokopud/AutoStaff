import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import defaultAvatar from '../../images/default_avatar.png';
import './style.css'
class Cabinet extends Component {

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

                                <label for="order__brand" className="">Марка</label>
                                <div className="form__select">
                                    <select id="order__brand" name="make" onChange={this.handleLogin}>
                                        <option selected>Марка</option>
                                        <option value="BMW">BMW</option>
                                        <option value="KIA">KIA</option>
                                        <option value="AUDI">AUDI</option>
                                    </select>
                                </div>

                                <label for="order__model" className="">Модель</label>
                                <div className="form__select">
                                    <select id="order__model" name="model" onChange={this.handleLogin}>
                                        <option selected>Модель</option>
                                        <option value="e320">e320</option>
                                        <option value="e310">e310</option>
                                        <option value="series 7">series 7</option>
                                    </select>
                                </div>

                                <label for="order__year" className="">Год</label>
                                <div className="form__select">
                                    <select id="order__year" name="year" onChange={this.handleLogin}>
                                        <option selected>Год</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                    </select>
                                </div>

                                <label for="order__vin" className="">Vin-код</label>
                                <input type="text" name="vin" onChange={this.handleLogin}/>

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
)(Cabinet);
