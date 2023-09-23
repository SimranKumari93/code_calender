import React  from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

import code_calender from '../../src/images/code_calender.png';

import './Homes.css';


const Home = () => {

  const contestList1 = ['LeetCode', 'CodeChef', 'CodeForces'];
  const contestList2 = ['HackerRank', 'W3Schools', 'GeeksForGeeks'];
  const contestList3 = ['TopCoder', 'CodingNinjas', 'HackerEarth'];

  return (  
    <>
      <div className='head'><img alt=""src={code_calender}></img></div>
      <div className='all'>
          <div className='wrap'>
                <div className='Sec'>
                  <div className='subSec'>
                    {contestList1.map((contest, index) => (
                      <Card name = {contest} key = {index} />
                    ))}  
                  </div>
                  <div className='subSec'>
                    {contestList2.map((contest, index) => (
                      <Card name = {contest} key = {index} />
                    ))}  
                  </div>
                  <div className='subSec'>
                    {contestList3.map((contest, index) => (
                      <Card name = {contest} key = {index} />
                    ))}  
                  </div>
                </div>

                <Link to={contestList1[(Math.floor(Math.random() * contestList1.length))]} className='contestLink'> 
                  <div className='up '><button>Upcoming Contests</button></div>
                </Link> 
          </div>
      </div>
    </>
  )
}
   

export default Home;