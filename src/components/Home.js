import React  from 'react'
import leetcode from '../../src/images/leetcode2.png';
import codeforces from '../../src/images/code-forces.png';
import codechef from '../../src/images/icons8-codechef-48.png';
import hackerrank from '../../src/images/hackerrank.png';
import geeksforgeeks from '../../src/images/icons8-geeksforgeeks-48.png';
import w3schools from '../../src/images/w3schools.png';
import code_calender from '../../src/images/code_calender.png';
import topcoder from '../../src/images/topcoder.png';
import codingninjas from '../../src/images/codingninja.png';
import hackerearth from '../../src/images/hackerearth.223x256.png'
import './Homes.css';
import './Homes.css';
//import Lists from './Lists'

//const contestLists = [ 'leetcode', 'codeforces', 'codingninjas'];


const Home = () => {
  const handleClick = () => {
    window.location.replace('#');
  };
  return (
     
    <>
       <div className='head'><img alt=""src={code_calender}></img></div>
    <div className='all'>
         <div class='wrap'>
              <div className='Sec'>
                <div className='subSec'>
  <div className='op'><div className='in'><img alt="" src={leetcode}></img><span className='title' onClick={handleClick}>LeetCode</span></div></div>
  <div className='op'><div className='in'><img alt=""src={codeforces}></img><span className='title' onClick={handleClick}>CodeForces</span></div></div>
  <div className='op'><div className='in'><img alt=""src={codechef}></img><span className='title' onClick={handleClick}>CodeChef</span></div></div>
                      
                    
                 </div>
                 <div className='subSec'>
  <div className='op'><div className='in'><img alt="" src={hackerrank}></img><span className='title' onClick={handleClick}>HackerRank</span></div></div>
  <div className='op'><div className='in'><img alt="" src={geeksforgeeks}></img><span className='title' onClick={handleClick}>geeksforgeeks</span></div></div>
  <div className='op'><div className='in'><img alt="" src={w3schools}></img><span className='title' onClick={handleClick}>w3schools</span></div></div>
                      
                    
                 </div>
                 <div className='subSec'>
  <div className='op'><div className='in'><img alt="" src={topcoder}></img><span className='title' onClick={handleClick}>TopCoder</span></div></div>
  <div className='op'><div className='in'><img alt="" src={codingninjas}></img><span className='title' onClick={handleClick}>CodingNinjas</span></div></div>
  <div className='op'><div className='in'><img alt="" src={hackerearth}></img><span className='title' onClick={handleClick}>HackerEarth</span></div></div>
                      
                    
                 </div>

                </div>
             <div className='up'><button onClick={handleClick} >Upcoming Contests</button></div>
              
         </div>
         
    </div>
 
</>
  )
}
   

export default Home;