import Card from './Card';
import styles from './Card.module.scss';
import workImage from '../images/icon-work.svg';
import playImage from '../images/icon-play.svg';
import studyImage from '../images/icon-study.svg';
import exerciseImage from '../images/icon-exercise.svg';
import socialImage from '../images/icon-social.svg';
import selfCareImage from '../images/icon-self-care.svg';

const Daily = ({ info }) => {
  return info.map(i => {
    if (i.title === 'Work') {
      return (
        <div className={styles.card__work} key={i.title}>
          <img className={styles.card__work__img} src={workImage} alt='' />
          <Card
            title={i.title}
            timeframesCurrent={i.timeframes.daily.current}
            timeframesPrev={i.timeframes.daily.previous}
          />
        </div>
      );
    } else if (i.title === 'Play') {
      return (
        <div className={styles.card__play} key={i.title}>
          <img className={styles.card__play__img} src={playImage} alt='' />
          <Card
            title={i.title}
            timeframesCurrent={i.timeframes.daily.current}
            timeframesPrev={i.timeframes.daily.previous}
          />
        </div>
      );
    } else if (i.title === 'Study') {
      return (
        <div className={styles.card__study} key={i.title}>
          <img className={styles.card__study__img} src={studyImage} alt='' />
          <Card
            title={i.title}
            timeframesCurrent={i.timeframes.daily.current}
            timeframesPrev={i.timeframes.daily.previous}
          />
        </div>
      );
    } else if (i.title === 'Exercise') {
      return (
        <div className={styles.card__exercise} key={i.title}>
          <img className={styles.card__exercise__img} src={exerciseImage} alt='' />
          <Card
            title={i.title}
            timeframesCurrent={i.timeframes.daily.current}
            timeframesPrev={i.timeframes.daily.previous}
          />
        </div>
      );
    } else if (i.title === 'Social') {
      return (
        <div className={styles.card__social} key={i.title}>
          <img className={styles.card__social__img} src={socialImage} alt='' />
          <Card
            title={i.title}
            timeframesCurrent={i.timeframes.daily.current}
            timeframesPrev={i.timeframes.daily.previous}
          />
        </div>
      );
    } else if (i.title === 'Self Care') {
      return (
        <div className={styles.card__selfcare} key={i.title}>
          <img className={styles.card__selfcare__img} src={selfCareImage} alt='' />
          <Card
            title={i.title}
            timeframesCurrent={i.timeframes.daily.current}
            timeframesPrev={i.timeframes.daily.previous}
          />
        </div>
      );
    }
    return info;
  });
};

export default Daily;
