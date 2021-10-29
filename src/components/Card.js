import classes from './Card.module.scss';
import dotsImage from '../images/icon-ellipsis.svg';

const Card = ({ title, timeframesCurrent, timeframesPrev }) => {
  return (
    <div className={`${classes.card} `}>
      <div>
        <div className={classes.card__cards}>
          <div className={classes.card__cards__flex}>
            <p className={classes.card__cards__title}>{title}</p>
            <img className={classes.card__cards__dots} src={dotsImage} alt={dotsImage} />
          </div>
          <div className={classes.card__cards__flexP}>
            <p className={classes.card__cards__hrs}>{timeframesCurrent}hrs</p>
            <p className={classes.card__cards__lastWeek}>Last week - {timeframesPrev}hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
