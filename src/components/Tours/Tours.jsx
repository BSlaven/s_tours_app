import { useState, useEffect } from 'react'

import Tour from '../Tour/Tour';

const [ tours, setTours ] = useState({})

useEffect(() => {
  
}, [])

const fetchTours = async () => {
  const res = await fetch('');
  const tours = await res.jsosn();
  setTours(tours);
}

const Tours = () => {
  return (
    <div>
      <Tour />
    </div>
  );
};

export default Tours;
