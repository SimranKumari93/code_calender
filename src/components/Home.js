import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

import code_calender from '../../src/images/code_calender.png';

import '../styles/Homes.css';

const Home = () => {
  const categories = {
  Competitive: [
    { name: 'LeetCode', start_time: '2025-07-25T14:00:00Z' },
    { name: 'CodeChef', start_time: '2025-07-25T18:00:00Z' },
    { name: 'CodeForces', start_time: '2025-07-26T10:30:00Z' },
    { name: 'HackerRank', start_time: '2025-07-27T11:00:00Z' },
    { name: 'AtCoder', start_time: '2025-07-27T15:00:00Z' },
    { name: 'TopCoder', start_time: '2025-07-28T09:00:00Z' },
    { name: 'HackerEarth', start_time: '2025-07-28T20:00:00Z' }
  ],
  Learning: [
    { name: 'GeeksForGeeks' },
    { name: 'CodeCademy' },
    { name: 'CodingNinjas' }
  ],
  Forums: [
    { name: 'StackOverflow' },
    { name: 'KickStarter' }
  ]
};


  const [selectedCategory, setSelectedCategory] = useState('Competitive');
  const [sortOption, setSortOption] = useState('A-Z');

  const getSortedList = (list) => {
    return [...list].sort((a, b) => {
      if (sortOption === 'A-Z') return a.name.localeCompare(b.name);
      if (sortOption === 'Z-A') return b.name.localeCompare(a.name);
      return 0;
    });
  };

  const sortedContests = getSortedList(categories[selectedCategory]);

  return (
    <>
      <div className='head'><img alt="" src={code_calender}></img></div>
      <h2 className='my-name'>Made with love by Simran Kumari</h2>

      <div className='tabs'>
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className='sort-dropdown'
        >
          <option value="A-Z">Sort: A - Z</option>
          <option value="Z-A">Sort: Z - A</option>
        </select>
      </div>

      <div className='all'>
        <div className='wrap'>
          <div className='Sec'>
            <div className='subSec'>
              {sortedContests.slice(0, 3).map((contest, index) => (
                <Card name={contest.name} key={index}  startTime={contest.start_time}/>
              ))}
            </div>
            <div className='subSec'>
              {sortedContests.slice(3, 6).map((contest, index) => (
                <Card name={contest.name} key={index + 3} startTime={contest.start_time}   />
              ))}
            </div>
            <div className='subSec'>
              {sortedContests.slice(6, 9).map((contest, index) => (
                <Card name={contest.name} key={index + 6} startTime={contest.start_time} />
              ))}
            </div>
            <div className='subSec'>
              {sortedContests.slice(9).map((contest, index) => (
                <Card name={contest.name} key={index + 9} startTime={contest.start_time} />
              ))}
            </div>
          </div>

          <Link to='all' className='contest-link'>
            <div className='up '><button>Upcoming Contests</button></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

