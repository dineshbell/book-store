import React from 'react'
import './Cards.css';

const Cards = (props) => {
  return (
    <div className='card'>
      {props.children}
    </div>
  )
}

export default Cards
