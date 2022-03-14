import classes from './DeleteBtn.module.css';

const DeleteBtn = ({ click, tourId }) => {
  return (
    <button onClick={() => click(tourId)} className={classes.deleteBtn}>
      Not interested
    </button>
  )
};

export default DeleteBtn;
