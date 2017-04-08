import React, {Component} from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './style.css'
import OrderExecutor from '../../pages/order/OrderExecutor';
import OrderCustomer from '../../pages/order/OrderCustomer';
class Order extends Component {
    render() {

        return (
            <div>
                <Header />
                {this.props.state.startData.autorisation.type === 'executor' ?
                    <OrderExecutor />
                    :
                    <OrderCustomer />
                }

                <Footer />
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        state: state,
        ownProps
    }),
    dispatch => ({})
)(Order);
