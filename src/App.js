import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import data from './foods.json'
import AddForm from './components/AddForm';

class App extends Component {

  state = {
    foods: data,

  }

  render() {
    return (
      <div>
        <AddForm food={this.handleSubmit} />
        {
          this.state.foods.map((food) => {
            return <FoodBox food={food} />
          })
        }
      </div>
    )
  }
}


export default App;
