import React , { useState, useEffect } from 'react';
import axios from 'axios';


// import '../assets/styles.css';

const DataContest = ({ name,  myURL }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(myURL)  // we will put api in it
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }, [myURL]);

    return (
        <div>
        <h2>{ name } Contests</h2>
        <div>
            {data.map(contest => (
          <div className="contest-box" key={contest.id}>
          <h3 className="contest-name">{contest.name}</h3>
          <p className="contest-details">Starts: {new Date(contest.start_time).toLocaleString()}</p>
          <p className="contest-details">Ends: {new Date(contest.end_time).toLocaleString()}</p>
          <p className="contest-details">Duration: {contest.duration}</p>
          <p className="contest-details">
            URL: <a className="contest-url" href={contest.url} target="_blank" rel="noopener noreferrer">{contest.url}</a>
          </p>
        </div>
        ))}
        </div>
        </div> 
    );
        };

     export default DataContest;
