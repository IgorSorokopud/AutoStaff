import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import {showModal} from '../../actions/modal';
import defaultAvatar from '../../images/ocean.jpg';
import Rating from '../../components/Rating/index';
import { Link } from 'react-router';

class ListService extends Component {
    render() {

        function login(data) {
            this.props.modal({mode: data, isShowingModal: true});
        }

        return (
            <div>
                <div className="service">
                    { this.props.users.users.map(function (user, index) {

                        let item = (
                            <div className="card" key={index}>
                                <div className="card__left">
                                    <div className="card__thumb">
                                        <img className="card__thumb-img" src={user.photo} key={index}/>
                                    </div>
                                </div>
                                <div className="card__right">
                                    <div className="card__content">
                                        <Link to={`/more/${user.id}`}
                                              className="card__title">{user.name} {user.surname}</Link>
                                        <div className="card__subtitle">Специализация: {user.specialization}</div>
                                        <div className="card__adress">{user.addres.city}</div>

                                        <div>{user.auto.brand} {user.auto.model} {user.auto.year}</div>

                                        <div className="card__excerpt">{user.description}</div>
                                        <ul className="card__list">
                                            {user.options.map(function (list, index) {
                                                if (index < 7) {
                                                    return (<li className="card__list-item" key={index}>{list}</li>)
                                                }
                                            })}
                                        </ul>
                                        <div className="card__corner card__corner--top">
                                            <Rating />
                                        </div>
                                        <div className="card__corner card__corner--bottom">
                                            <a href="#">Отзывы: { user.comment } </a>
                                        </div>

                                        <div className="card__buttons">
                                            {!this.props.users.registered ?
                                                <a href="#" onClick={login.bind(this, 'Registration')}
                                                   className="btn btn--link">{user.type === "executor" ? 'Заказать услугу' : 'Выполнить заказ'}</a>
                                                :
                                                <Link to={`/order/`} className="btn btn--link">{user.type === "executor" ? 'Заказать услугу' : 'Выполнить заказ'}</Link>
                                            }
                                            <Link to={`/more/${user.id}`} className="btn btn--link">Подробнее</Link>
                                            <Link to={`/more/${user.id}`} className="btn btn--link">Задать вопрос</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );

                        if (this.props.state.search === user.type) {
                            return item;
                        } else if (this.props.state.search === '') {
                            return item;
                        }
                    }.bind(this))}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        users: state.startData,
        state: state
    }),
    dispatch => ({
        modal: (data) => {
            dispatch(showModal(data));
        }
    })
)(ListService);
