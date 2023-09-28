import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../styles/DataDisplay.css';
import code_calender from '../../src/images/code_calender.png';

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
        <>
            <div className='head'><img alt=""src={code_calender}></img></div>
            <div className="container">
                <h2>{ name } Contests</h2>
                <div>
                    {data.map(contest => (
                        <div className="contest-box" key={contest.id}>
                            <h3 className="contest-name">{contest.name}</h3>
                            <p className="contest-details">Starts: {new Date(contest.start_time).toLocaleString()}</p>
                            <p className="contest-details">Ends: {new Date(contest.end_time).toLocaleString()}</p>
                            <p className="contest-details">Duration: {Math.floor(contest.duration / 60)} Minutes</p>
                            <div className="center-button">
                                <Link to={contest.url} className="contestLink">
                                    <div className="up2"><button>Take Contest</button></div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </>
    );
        };

     export default DataContest;
