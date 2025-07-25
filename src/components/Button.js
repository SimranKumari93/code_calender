
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ name, myURL }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>{name}</h1>

      <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
        Prev
      </button>
    </div>
  );
};

export default Button;
