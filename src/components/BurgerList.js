import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

export default class BurgerList extends Component {

  renderBurgerList = () => {
    if(this.props.burgerFilter === "All"){
      return this.props.burgers.map(
        (burger) => {return (<BurgerItem burger={burger} getBurger={this.props.getBurger} key={burger.id} />
        )}
      )}
    else {
          return this.props.burgers.filter(burgerItem => {
            return burgerItem.category === this.props.burgerFilter
          }).map((burger) => {return (<BurgerItem burger={burger} getBurger={this.props.getBurger} key={burger.id} />)
        })
    }
  }

  render(){
    return (
      <div className="BurgerList">
        { this.renderBurgerList() }
      </div>
    )
  }
}
