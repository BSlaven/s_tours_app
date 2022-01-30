import classes from './Tour.module.css';

const Tour = ({ tour }) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={tour.image}
        alt={tour.name} />
      <div className={classes.cardBody}>
        {tour.info.slice(0, 150)}
        <button className={classes.deleteBtn}>not interested</button>
      </div>
    </div>
  );
};

export default Tour;