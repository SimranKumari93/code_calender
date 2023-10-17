import React from 'react'

import { Link } from 'react-router-dom';

import '../styles/Homes.css';
import code_calender from  '../../src/images/code_calender.png';

function Card({ name }) {
  return (
        <Link to={name} className='contestLink'>
            <div className='op'><div className='in'><img alt="" src={code_calender}></img><span className='title'>{name}</span></div></div>
        </Link>
  )
}

export default Card
// require(`../images/${name}.png`)
// require(`../images/${code_calender}.png`)