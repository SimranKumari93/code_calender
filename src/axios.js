import axios from 'axios';
import React, { useEffect } from 'react';

function axios() {
    useEffect(() => {
        axios.get("")
        .then((response) => {
            console.log(response)
        })
    }, [])
  return (
    <div>axios</div>
  )
}

export default axios