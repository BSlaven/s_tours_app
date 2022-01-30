import { useState, useEffect } from 'react'

import Tour from '../Tour/Tour';
import classes from './Tours.module.css'

const Tours = () => {

  const [ tours, setTours ] = useState([])

  useEffect(() => {
    fetchTours();
  }, [])

  const fetchTours = async () => {
    const res = await fetch('https://course-api.com/react-tours-project');
    const tours = await res.json();
    setTours(tours);
  }
  
  return (
    <div className={classes.tours}>
      {tours && tours.map(tour => <Tour key={tour.id} tour={tour} />)}
    </div>
  );
};

export default Tours;
