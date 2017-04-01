import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startData } from './actions/start';
import './App.css';

import Header from './components/Header/index';
import Search from './components/Search/index';
import Sidebar from './components/Sidebar/Sidebar';
import ListService from './components/ListService/index';
import Footer from './components/Footer/index';
import Modal from './components/Modal/index';
import SimpleSlider from './components/Slider/index';

class App extends Component {
  render() {
    this.props.start();
    return (
      <div>
        <Header />
          <Search />
          <SimpleSlider />
          <div className="main-container">
              <div className="main-row clear">
                  <div className="main-content">
                      <ListService />
                  </div>
                  <div className="main-sidebar">
                      <Sidebar />
                  </div>
              </div>
          </div>
          <Footer />
          <Modal />
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
