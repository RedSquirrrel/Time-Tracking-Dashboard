import classes from './App.module.scss';
import { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import image from './images/image-jeremy.png';
import jsonData from './data.json';

const App = () => {
  const timeFrames = ['daily', 'weekly', 'monthly'];

  const [info, setInfo] = useState([]);
  const [selectedDashboard, setSelectedDashboard] = useState(timeFrames[1]);

  useEffect(() => {
    setInfo(jsonData.data);
  }, [info]);

  const handleTimes = e => {
    setSelectedDashboard(e.target.id);
  };

  return (
    <div className={classes.main}>
      <Footer />
      <div className={`${classes.container} `}>
        <div
          className={`${classes.container__grid} ${classes.container__grid__3__cols} ${classes.container__card__container}`}
        >
          <div className={classes.container__card__container__user}>
            <div className={classes.container__card__container__user__div}>
              <img src={image} alt='user' />
              <div>
                <p>Report for</p>
                <h4>Jeremy Robson</h4>
              </div>
            </div>
            <div className={classes.container__card__container__buttons}>
              {timeFrames.map((time, index) => {
                return (
                  <button
                    key={index}
                    id={time}
                    className={
                      selectedDashboard === time
                        ? `${classes.container__card__container__buttons__active}`
                        : `${classes.container__card__container__buttons__btn}`
                    }
                    onClick={e => handleTimes(e)}
                  >
                    {time.charAt(0).toUpperCase() + time.substr(1)}
                  </button>
                );
              })}
            </div>
          </div>

          {timeFrames.map((t, i) => {
            return (
              selectedDashboard === timeFrames[i] && (
                <CardContainer key={i} info={info} selectedDashboard={selectedDashboard} />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
