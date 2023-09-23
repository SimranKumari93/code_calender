import React from 'react'

import { Link } from 'react-router-dom';

import '../styles/Homes.css';

function Card({ name }) {
  return (
        <Link to={name} className='contestLink'>
            <div className='op'><div className='in'><img alt="" src={require(`../images/${name}.png`)}></img><span className='title'>{name}</span></div></div>
        </Link>
  )
}

export default Card
