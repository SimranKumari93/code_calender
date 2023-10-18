import React from 'react'

import { Link } from 'react-router-dom';

import '../styles/Homes.css';
import code_calender from  '../../src/images/code_calender.png';
import LeetCode from '../../src/images/LeetCode.png';
import HackerRank from '../../src/images/hackerrank.png';
import TopCoder from '../../src/images/topcoder.png';
import CodeChef from '../../src/images/CodeChef.png';
import W3Schools from '../../src/images/w3schools.png';
import CodingNinjas from '../../src/images/CodingNinjas.png';
import CodeForces from '../../src/images/CodeForces.png';
import GeeksForGeeks from '../../src/images/GeeksForGeeks.png';
import HackerEarth from '../../src/images/HackerEarth.png';

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