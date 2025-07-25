import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/DataDisplay.css';
import code_calender from '../../src/images/code_calender.png';

const ITEMS_PER_PAGE = 5;

const DataContest = ({ name, myURL }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(myURL)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, [myURL]);
  

  const start = page * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageData = data.slice(start, end);

  const formatDateForCalendar = (start, end) => {
    const fmt = d => new Date(d).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    return `${fmt(start)}/${fmt(end)}`;
  };

  return (
    <>
      <div className='head'><img alt="" src={code_calender} /></div>
      <div className="container">
        <h2>{name} Contests</h2>
        <div className="contest-box">
          {pageData.map((contest, i) => (
            <div className="contests-id" key={i}>
              <h3 className="contest-name">{contest.name}</h3>
              <p>Starts: {new Date(contest.start_time).toLocaleString()}</p>
              <p>Ends: {new Date(contest.end_time).toLocaleString()}</p>
              <p>Duration: {Math.floor(contest.duration / 60)} Minutes</p>

              <Link to={contest.url} className="contest-link" target="_blank">
                <div className="up2"><button>Take Contest</button></div>
              </Link>
<a
  href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(contest.name)}&dates=${formatDateForCalendar(contest.start_time, contest.end_time)}&details=${encodeURIComponent(contest.url)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="calendar-btn"
>
  Add to Google Calendar
</a>

            </div>
          ))}
        </div>

        <div className="pagination-buttons">
            <button onClick={() => navigate(-1)}  className='prev-button'>  ⬅ Prev</button>
        
          <button onClick={() => navigate(+1)} className='next-button'>Next ➡</button>
        </div>
      </div>
    </>
  );
};

export default DataContest;


// import React , { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// import '../styles/DataDisplay.css';
// import code_calender from '../../src/images/code_calender.png';

// // import '../assets/styles.css';

// const DataContest = ({ name,  myURL }) => {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate(0);


//     useEffect(() => {
//         axios.get(myURL)  // we will put api in it
//         .then(response => {
//             setData(response.data);
//         })
//         .catch(error => {
//             console.error('Error fetching data: ', error);
//         });
//     }, [myURL]);

//     return (
//         <>
//             <div className='head'><img alt=""src={code_calender}></img></div>
//             <div className="container">
//                 <h2>{ name } Contests</h2>
//                 <div className="contest-box">
//                     {data.map(contest => (
//                         <div className="contests-id" key={contest.id}>
//                             <h3 className="contest-name">{contest.name}</h3>
                                
//                             <p>Starts: {new Date(contest.start_time).toLocaleString()}</p>
//                             <p>Ends: {new Date(contest.end_time).toLocaleString()}</p>
//                             <p>Duration: {Math.floor(contest.duration / 60)} Minutes</p>
                            
//                             <Link to={contest.url} className="contest-link">
//                                 <div className="up2"><button>Take Contest</button></div>
//                             </Link>                            
//                         </div>
//                     ))}
//                 </div>
//                  <div>
//       <h1>{name}</h1>

//       <button onClick={() => navigate(-1)}  className='prev-button'>
//         Prev
//       </button>
//        <button onClick={() => navigate(+1)}  className='next-button'>
//         Next
//       </button>
//     </div>
//             </div> 
//         </>
//     );
//         };

//      export default DataContest;
