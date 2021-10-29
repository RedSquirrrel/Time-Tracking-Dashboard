import Card from './Card';
import styles from './Card.module.scss';
import workImage from '../images/icon-work.svg';
import playImage from '../images/icon-play.svg';
import studyImage from '../images/icon-study.svg';
import exerciseImage from '../images/icon-exercise.svg';
import socialImage from '../images/icon-social.svg';
import selfCareImage from '../images/icon-self-care.svg';

const CardContainer = ({ info, selectedDashboard }) => {
  const images = [workImage, playImage, studyImage, exerciseImage, socialImage, selfCareImage];

  return info.map((i, index) => {
    return (
      <div key={i.title} className={`${styles[`card__${i.title}`]}`}>
        <img className={styles.card__work__img} src={images[index]} alt={i.title} />
        <Card
          title={i.title}
          timeframesCurrent={i.timeframes[selectedDashboard].current}
          timeframesPrev={i.timeframes[selectedDashboard].previous}
        />
      </div>
    );
  });
};

export default CardContainer;
