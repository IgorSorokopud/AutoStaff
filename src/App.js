import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startData } from './actions/start';
import './App.css';

import Header from './components/Header/index';
import SimpleSlider from './components/Slider/index';
import Menu from './components/Menu/index';
import ListService from './components/ListService/index';
import Footer from './components/Footer/index';

class App extends Component {

  render() {
    this.props.start();
    return (
      <div>
        <Header />
        <div className="main-wrapper">
          <SimpleSlider />
          <Menu />
          <ListService />
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    start: () => {
      dispatch(startData());
    }
  })
)(App);
