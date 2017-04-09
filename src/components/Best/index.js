import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';
import defaultAvatar from '../../images/ocean.jpg';
import Rating from '../../components/Rating/index';
import {Link} from 'react-router';

class Best extends Component {
    render() {
        return (
            <div>
                {this.props.users.users.map(function (user, index) {
                    return (
                        <div className="card__content" key={index}>
                            <div className="card__thumb best__img">
                                <img className="card__thumb-img" src={user.photo}/>
                            </div>
                            <Link to={`/more/${user.id}`} className="card__title">{user.name} {user.surname}</Link>
                            <div className="card__subtitle">Специализация: {user.specialization}</div>
                            <div className="card__subtitle">Город: {user.addres.city}</div>
                        </div>
                    )
                }.bind(this))}
            </div>
        );
    }
}

export default connect(
    state => ({
        users: state.startData
    }),
    dispatch => ({})
)(Best);
