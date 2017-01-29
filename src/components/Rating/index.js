import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';

class Rating extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    render() {
        const { rating } = this.state;
        return (
            <div>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}

export default connect(
  state => ({
  }),
  dispatch => ({})
)(Rating);
