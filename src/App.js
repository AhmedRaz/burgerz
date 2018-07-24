import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'
import { fetchBurgers } from './Adapter/Adapter'

class App extends Component {

  state = {
    burgers:[],
    selectedBurger: "",
    burgerFilter: "All"
  }

  componentDidMount () {
    fetchBurgers().then(
      burgerArray => {
        this.setState({
          burgers: burgerArray
        })
      }
    )
  }

  getBurger = (burger) => {
    this.setState({
      selectedBurger: burger
    })
  }



  render() {

    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgers} getBurger={this.getBurger} />
        <BurgerDisplay burger={this.state.selectedBurger} />
      </div>
    );
  }
}

export default App;
