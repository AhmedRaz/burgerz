import React, { Component } from 'react';

const BurgerDisplay = (props) => {
    const burger = props.burger;
    if (burger !== "") {

      return (
        <div className="BurgerDisplay">
          <img src={`${burger.imgURL}`}/>
          <br/>
          <h2>{`${burger.name}`}</h2>
          <br/>
          <h3>{`${burger.category}`}</h3>
          <br/>
          <select onChange={console.log}>
            <option value="Relatable">Relatable</option>
            <option value="Bougie">Bougie</option>
          </select>
        </div>
      )
    } else {
      return (
      <div className="BurgerDisplay">No Burger Selected </div>
      )
    }
}

export default BurgerDisplay
