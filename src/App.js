import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import DataContest from './components/DataContest.js';
import Home from './components/Home.js';
//  import Navbar from './components/Navbar.js';
function App() {
  return (
   <div>
  
      <BrowserRouter>
         <Routes>
        <Route path='/' element={<Home />} />      
        <Route path='/CodeChef' element={<DataContest name="Code Chef" myURL = "https://kontests.net/api/v1/code_chef"/>} />      
        <Route path='/CodeForces' element={<DataContest name="Code Forces" myURL = "https://kontests.net/api/v1/codeforces"/>} />      
        <Route path='/LeetCode' element={<DataContest name="Leet Code" myURL = "https://kontests.net/api/v1/leet_code"/>} />      
        <Route path='/TopToder' element={<DataContest name="Top Coder" myURL = "https://kontests.net/api/v1/top_coder"/>} />      
        </Routes>
      </BrowserRouter>

   </div>
    
  );
}

 export default App;

