import React , {useState, useEffect} from 'react';
import axios from 'axios';

// import '../assets/styles.css';

const DataDisplay = ({ myURL}) => {
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
            <h2>CodeChef Contests</h2>
        <div>
        </div>
            {data.map(contest => {
                <div className="contest-box" key={contest.id}>
            <h3 className="contest-name">{contest.name}</h3>
            <p className="contest-details">Starts: {new Data(contest.start_time).toLocaleString()}</p>
            <p className="contest-details">Ends: {new Data(contest.end_time).toLocaleString()}</p>
            <p className="contest-details">Duration: {new Data(contest.duration)}</p>
            <p className="contest-details">
                URL: <a className="contest-url" href={contest.url} target="_blank" rel="noopener noreferrer">{contest.url}</a>
            </p>
            })}
        </div>
                </>
    )
}