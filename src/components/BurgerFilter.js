import React, { Component } from 'react';

export default class BurgerFilter extends Component {

  handleChange = (e) => {
    this.props.getBurgerFilter(e.target.value)
  }

  render(){
    return (
      <div className="BurgerFilter">
        <select onChange={(e) => this.handleChange(e)}>
          <option value="All">All</option>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
  }
}
