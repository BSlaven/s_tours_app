import classes from './Tour.module.css';

const Tour = ({ tour }) => {
  return (
    <div className={classes.card}>
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          src={tour.image}
          alt={tour.name} />
      </div>
      <div className={classes.cardHeader}>

      </div>
      <div className={classes.cardBody}>
        {tour.info}
      </div>
      <div className={classes.cardFooter}>
        <button className={classes.deleteBtn}>not interested</button>
      </div>
    </div>
  );
};

export default Tour;