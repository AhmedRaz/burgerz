import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    burgerFilter: "All"
  }

  getBurgerFilter = (selection) => {
    this.setState({
      burgerFilter: selection
    })
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter getBurgerFilter={this.getBurgerFilter} />
        <BurgerList burgers={this.props.burgers} getBurger={this.props.getBurger} burgerFilter={this.state.burgerFilter} />
      </div>
    )
  }
}
