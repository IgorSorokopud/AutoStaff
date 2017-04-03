import React, { Component } from 'react';
import Best from '../../components/Best/index';

class Sidebar extends Component {

    render() {
        return (
            <div className="card">
                <div className="card__content">Лучшие исполнители</div>
                <Best />
            </div>
        );
    }
}

export default Sidebar;
