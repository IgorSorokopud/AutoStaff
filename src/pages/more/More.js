import React, {Component} from 'react';
import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Rating from '../../components/Rating/index';
import './style.css';

class More extends Component {
    render() {
        let currentMore = this.props.ownProps.params.id;
        let userMore = this.props.users.users[currentMore];
        return (
            <div>
                <Header />

                <div className="main-container">
                    <div className="main-row clear">
                        <div className="main-content">

                            <div className="card">
                                <div className="card__content">
                                    <div className="card__title">{userMore.name} {userMore.surname}</div>
                                    <div className="card__subtitle">Специализация: {userMore.specialization}</div>
                                    <div className="card__adress">{userMore.addres}</div>
                                    <div className="card__description">{userMore.description}</div>
                                    <ul className="card__list">
                                        {userMore.options.map(function (list, index) {
                                            return (<li className="card__list-item" key={index}>{list}</li>)
                                        })}
                                    </ul>
                                    <div className="card__corner card__corner--top">
                                        <Rating />
                                    </div>
                                    <div className="card__corner card__corner card__corner--bottom">
                                        <a href="#">Отзывы: { userMore.comment } </a>
                                    </div>
                                    <div className="card__buttons">
                                        <Link to={`/order`}className="btn btn--link">Заказать услугу</Link>
                                        <Link to="/" className="btn btn--link">Назад</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card__content">
                                    <div className="card__title">Отзывы</div>
                                </div>
                            </div>

                        </div>

                        <div className="main-sidebar">
                            <div className="card">
                                <div className="card__content">
                                    <img src={userMore.photo}/>
                                </div>
                            </div>
                            <Sidebar />
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
        state: state,
        users: state.startData,
        ownProps
    }),
    dispatch => ({})
)(More);
