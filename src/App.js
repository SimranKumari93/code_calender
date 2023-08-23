import {BrowseRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import DataDisplay from './components/DataDisplay.js';
import Home from './components/Home.js';
//  import Navbar from './components/Navbar.js';
function App() {
  return (
   <div>
    {/* {<DataDisplay myURL = "https://kontests.net/api"/>} */}
  
      <BrowseRouter>
         <Routes>
        <Route path='code_chef' element={<Home />} />      
        <Route path='/CodeChef' element={<DataDisplay name="Code Chef" myURl = "https://kontests.net/api/v1/code_chef"/>} />      
        <Route path='CodeForces' element={<DataDisplay name="Code Forces" myURl = "https://kontests.net/api/v1/codeforces"/>} />      
        <Route path='LeetCode' element={<DataDisplay name="Leet Code" myURl = "https://kontests.net/api/v1/leet_code"/>} />      
        <Route path='TopCoder' element={<DataDisplay name="Top Coder" myURl = "https://kontests.net/api/v1/top_coder"/>} />      
        </Routes>
      </BrowseRouter>

   </div>
    
  );
}

export default App;
