import React, { Component } from 'react';
import Best from '../../components/Best/index';

class Social extends Component {

    render() {
        return (
            <ul className="social__list">
                <li className="social__item">
                    <a href="#" className="social__icon fa fa-facebook"></a>
                </li>
                <li className="social__item">
                    <a href="#" className="social__icon fa fa-google-plus"></a>
                </li>
                <li className="social__item">
                    <a href="#" className="social__icon fa fa-odnoklassniki"></a>
                </li>
                <li className="social__item">
                    <a href="#" className="social__icon fa fa-twitter"></a>
                </li>
                <li className="social__item">
                    <a href="#" className="social__icon fa fa-vk"></a>
                </li>
            </ul>
        );
    }
}

export default Social;
