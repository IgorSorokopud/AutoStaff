import React, { Component } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import img from '../../images/manual.png';
import './style.css'
class Manual extends Component {
  render() {
    let url = window.location.href;
    let type = url ? url.split('?')[1] : window.location.search.slice(1);

    return(
      <div>
        <Header />

        <div className="main-container">
          <div className="main-row clear">
            <div className="main-content">

              <div className="card">
                <div className="card__content manual">
                  <div className="card__title manual__title">{this.props.data[type].title}</div>

                  <div className="manual__img">
                    <img src={img}/>
                  </div>

                    {this.props.data[type].text.map(function(content, index){
                      return (

                      <div className="card manual_stap" key={index}>
                          <div className="card__title manual__title">{content.title}</div>
                          <span>{content.text}</span>
                      </div>
                    )
                  })}

                </div>
              </div>

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
  (state, ownProps) => ({
    data: state.startData.userType,
    ownProps
  }),
  dispatch => ({})
)(Manual);
