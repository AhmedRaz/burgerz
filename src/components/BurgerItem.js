import React, { Component } from 'react';

const BurgerItem = (props) => {

  const handleShowClick = () => {
    props.getBurger(props.burger)
  }
  return (
    <div>
      <div className="BurgerItem">
        { `${props.burger.name}` }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={handleShowClick}>Show</button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
