import React  from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

import code_calender from '../../src/images/code_calender.png';

import '../styles/Homes.css';


const Home = () => {

  const contestList1 = ['LeetCode', 'CodeChef', 'CodeForces'];
  const contestList2 = ['HackerRank', 'AtCoder'];
  const contestList3 = ['TopCoder', 'HackerEarth'];

  return (  
    <>
      <div className='head'><img alt=""src={code_calender}></img></div>
      <h2 className='my-name'>Made with love by Simran Kumari</h2>
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

                <Link to='all' className='contest-link'> 
                  <div className='up '><button>Upcoming Contests</button></div>
                </Link> 
          </div>
      </div>
    </>
  )
}
   

export default Home;