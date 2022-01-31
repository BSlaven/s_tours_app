import classes from './Tour.module.css';

const Tour = ({ tour }) => {
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
        {tour.info.slice(0, 150)}
        <button className={classes.deleteBtn}>not interested</button>
      </div>
    </div>
  );
};

export default Tour;