import React, { Component } from 'react';
import Header from '../components/Header/index';
import SimpleSlider from '../components/Slider/index';
import Menu from '../components/Menu/index';
import Footer from '../components/Footer/index';

class More extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="main-wrapper">
          <SimpleSlider />
          <Menu />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Amet aspernatur dolore excepturi mollitia veritatis 
              vero voluptates. Animi eaque enim et expedita id ipsam, quod
              recusandae rem similique voluptas! Tenetur, vitae.
            </p>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default More;
