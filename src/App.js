import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { useState } from 'react';
import './styles/theme.css';
import DataContest from './components/DataContest.js';
import Home from './components/Home.js';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    
      <div className={darkMode ? 'app dark' : 'app light'}>
      <switch className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞' : '🌙'}
      </switch>

      {/* {<DataContest myURL = "https://kontests.net/api"/>} */}
    
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />   
            <Route path="/platform/:name" element={<DataContest />} /> 
            <Route path='/all' element={<DataContest name="All Upcoming" myURL = "https://kontests.net/api/v1/all"/>} />    
            <Route path='/TopCoder' element={<DataContest name="Top Coders" myURL="https://kontests.net/api/v1/top_coder" />} />  
            <Route path='/HackerRank' element={<DataContest name="Hacker Rank" myURL="https://kontests.net/api/v1/hacker_rank" />} />    
            <Route path='/CodeChef' element={<DataContest name="Code Chef" myURL = "https://kontests.net/api/v1/code_chef"/>} />      
            <Route path='/CodeForces' element={<DataContest name="Code Forces" myURL = "https://kontests.net/api/v1/codeforces"/>} />      
            <Route path='/LeetCode' element={<DataContest name="Leet Code" myURL = "https://kontests.net/api/v1/leet_code"/>} />      
            <Route path='/TopToder' element={<DataContest name="Top Coder" myURL = "https://kontests.net/api/v1/top_coder"/>} />  
            <Route path='/AtCoder' element={<DataContest name="At Coder" myURL = "https://kontests.net/api/v1/at_coder"/>} />  
            <Route path='/HackerEarth' element={<DataContest name="Hacker Earth" myURL = "https://kontests.net/api/v1/hacker_earth"/>} />      
          </Routes>
        </BrowserRouter>

    </div>
  );
}

 export default App;
