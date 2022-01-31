import { useState } from 'react';

import classes from './Tour.module.css';

const Tour = ({ tour }) => {

  const [ showMore, setShowMore ] = useState(false);

  const displayInfo = showMore ? tour.info : tour.info.slice(0, 150);

  const toggleMore = () => {
    setShowMore(!showMore)
  }

  const moreOrLess = (
    <span className={classes.moreLess} onClick={toggleMore}>
      {!showMore ? ' More info' : ' Less info'}
    </span>
  )
  
  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={tour.image}
        alt={tour.name} />
      <div className={classes.cardBody}>
        <div className={classes.cardHeader}>
          <p className={classes.tourName}>{tour.name}</p>
          <span className={classes.tourPrice}>{tour.price}</span>
        </div>
        <p>{displayInfo} {moreOrLess}</p>
        <button className={classes.deleteBtn}>not interested</button>
      </div>
    </div>
  );
};

export default Tour;