// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import '../styles/Homes.css';

// function Card({ name }) {
//   const [isFavorite, setIsfavorite] = useState(false); 

//   const toggleFavorite = (e) => {
//     e.preventDefault(); 
//     setIsfavorite(!isFavorite);
//   }; 

//   return (
//         <Link to={name} className='contest-link'>
//             <div className='op'><div className='in'><img alt="" src={require(`../images/${name}.png`)}></img><span className='title'>{name}</span>
//              <span className={`star ${isFavorite ? 'fav' : ''}`} onClick={toggleFavorite}>★</span></div></div>
//         </Link>
//   )
// }

// export default Card

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homes.css';

function Card({ name, startTime }) {
  const [timeLeft, setTimeLeft] = useState('');


  useEffect(() => {
    if (!startTime) return;

    const updateTimer = () => {
      const now = new Date();
      const distance = new Date(startTime) - now;

      if (distance <= 0) {
        setTimeLeft('Live Now');
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer(); // run once immediately
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    
    <Link to={`/platform/${name.toLowerCase()}`} className='contest-link'>
      <div className='op'>
        <div className='in'>
          <img alt="" src={require(`../images/${name}.png`)} />
          <span className='title'>{name}</span>
          {startTime && <div className='countdown'>{timeLeft}</div>}
        </div>
      </div>
    </Link>
  );
}

export default Card;
