import React, { Component } from 'react';
import 'bulma/css/bulma.css';
export class FoodBox extends Component {
    render() {
        const {food} = this.props;
        return (
            <div className="box">
                <div className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img alt="food" src={food.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories}</small>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FoodBox