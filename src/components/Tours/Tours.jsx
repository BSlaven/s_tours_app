import { useState, useEffect } from 'react'

import Tour from '../Tour/Tour';
import Loading from '../Loading/Loading';
import classes from './Tours.module.css';

const Tours = () => {

  const [ tours, setTours ] = useState([]);
  const [ showLoading, setShowLoading ] = useState(true);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      setShowLoading(true)
      const res = await fetch('https://course-api.com/react-tours-project');
      const tours = await res.json();
      setTours(tours);
      setShowLoading(false)  
    } catch(e) {
      console.log(e);
    }
  }

  const removeTour = id => {
    const newTours = [ ...tours ];
    const filteredTours = newTours.filter(tour => tour.id !== id);
    setTours(filteredTours);
  }
  
  return (
    <div className={classes.tours}>
      {showLoading && <Loading />}
      {tours && tours.map(tour => <Tour key={tour.id} remove={removeTour} tour={tour} />)}
    </div>
  );
};

export default Tours;
