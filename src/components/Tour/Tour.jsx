import classes from './Tour.module.css';

const Tour = () => {
  return (
    <div className={classes.card}>
      <div className={classes.imgContainer}>
        <img
          className={classes.image}
          src="src/assets/building.jpg"
          alt="a corporate building" />
      </div>
      <div className={classes.cardBody}>
        This is card body
      </div>
      <div className={classes.cardFooter}>
        This is a card footer
      </div>
    </div>
  );
};

export default Tour;
