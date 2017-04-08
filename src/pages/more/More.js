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
        let user = this.props.users.users[currentMore];
        return (
            <div>
                <Header />

                <div className="main-container">
                    <div className="main-row clear">
                        <div className="main-content">

                            <div className="card">
                                <div className="card__content">
                                    <div className="card__title">{user.name} {user.surname}</div>
                                    <div className="card__subtitle">Специализация: {user.specialization}</div>
                                    <div
                                        className="card__adress">{user.addres.city}, {user.addres.street}, {user.addres.number}</div>
                                    <div className="card__description">{user.description}</div>
                                    <ul className="card__list">
                                        {user.options.map(function (list, index) {
                                            return (<li className="card__list-item" key={index}>{list}</li>)
                                        })}
                                    </ul>
                                    <div className="card__corner card__corner--top">
                                        <Rating />
                                    </div>
                                    <div className="card__buttons">
                                        <Link to={`/order`} className="btn btn--link">Заказать услугу</Link>
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
                                    <img src={user.photo}/>

                                    <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,
                                        New+York,NY&zoom=13&size=600x300&maptype=roadmap
                                        &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.
                                        711614,-74.012318
                                        &markers=color:red%7Clabel:C%7C40.718217,-73.998284
                                        &key=AIzaSyBARKCGndqyoBaMuM7UBnSplfFzZJINgGc"/>
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
