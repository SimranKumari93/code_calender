import React from 'react'
import leetcode from '../../src/images/leetcode2.png';
import codeforces from '../../src/images/code-forces.png';
import codechef from '../../src/images/icons8-codechef-48.png';
import hackerrank from '../../src/images/hackerrank.png';
import geeksforgeeks from '../../src/images/icons8-geeksforgeeks-48.png';
import w3schools from '../../src/images/w3schools.png';
import code_calender from '../../src/images/code_calender.png';
import './Homes.css';
import './Homes.css';
//import Lists from './Lists'

//const contestLists = [ 'leetcode', 'codeforces', 'codingninjas'];


const Home = () => {
  return (
     
    <>
       <div className='head'><img src={code_calender}></img></div>
    <div className='all'>
         <div class='wrap'>
              <div className='Sec'>
                <div className='subSec'>
                      <div className='op'><div className='in'><img src={leetcode}></img><span className='title'>LeetCode</span></div></div>
                      <div className='op'><div className='in'><img src={codeforces}></img><span className='title'>CodeForces</span></div></div>
                      <div className='op'><div className='in'><img src={codechef}></img><span className='title'>CodeChef</span></div></div>
                      
                    
                 </div>
                 <div className='subSec'>
                     <div className='op'><div className='in'><img src={hackerrank}></img><span className='title'>HackerRank</span></div></div>
                      <div className='op'><div className='in'><img src={geeksforgeeks}></img><span className='title'>geeksforgeeks</span></div></div>
                      <div className='op'><div className='in'><img src={w3schools}></img><span className='title'>w3schools</span></div></div>
                      
                    
                 </div>

                </div>
             <div className='up'><button>Upcoming Contests</button></div>
              
         </div>
         
    </div>
      /*<h1 align="center">Code Calender</h1>
    <div className="container">
     <div><img src="D:\Web Development\code_calender\public\code cal images\leetcode2.png" alt=""/>LeetCode</div><br/>
     <div><img src="D:\Web Development\code_calender\public\code cal images\code-forces.png" alt=""/>Codeforces</div><br/>
     <div><img src="D:\Web Development\code_calender\public\code cal images\codingninja.png" alt=""/>CodingNinjas</div><br/>
     <div><img src="D:\Web Development\code_calender\public\code cal images\icons8-geeksforgeeks-48.png" alt=""/></div>Geeks for Geeks<br/>
     <div><img src="D:\Web Development\code_calender\public\code cal images\icons8-codechef-48.png" alt=""/>CodeChef</div><br/>
     <div><img src="D:\Web Development\code_calender\public\code cal images\topcoder.png" alt=""/>TopCoder</div><br/>
     <div><img src="D:\Web Development\code_calender\public\code cal images\hackerrank.png" alt=""/>HackerRank</div><br/>
     <div><img src="D:\Web Development\code_calender\public\code cal images\hackerearth.223x256.png" alt=""/>Hackerearth</div><br/>
     </div>*/
     
</>
  )
}
   

export default Home;


/* </div>
    <div>LeetCode</div>
    <div><img src=""/>CodeForces</div>
    <div><img src=""/>CodingNinjas</div>
    <div><img src=""/>Geeks For Geeks</div>
    <div><img src=""/>CodeChef</div>
    <div><img src=""/>TopCoder</div> */
