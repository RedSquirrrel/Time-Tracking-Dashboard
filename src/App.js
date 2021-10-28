import classes from './App.module.scss';
import { useState, useEffect } from 'react';
import Weekly from './components/Weekly';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import image from './images/image-jeremy.png';
import jsonData from './data.json';

const App = () => {
  const [info, setInfo] = useState([]);
  const [daily, setDaily] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [monthly, setMothly] = useState([]);
  const [selectedDashboard, setSelectedDashboard] = useState('weekly');

  useEffect(() => {
    setInfo(jsonData.data);
  }, [info]);

  const handleDaily = e => {
    setSelectedDashboard(e.target.id);
    setDaily(e.target.value);
  };
  const handleMonthly = e => {
    setSelectedDashboard(e.target.id);
    setMothly(e.target.value);
  };
  const handleWeekly = e => {
    setSelectedDashboard(e.target.id);
    setWeekly(e.target.value);
  };

  return (
    <div className={`${classes.container} `}>
      <div
        className={`${classes.container__grid} ${classes.container__grid__3__cols} ${classes.container__card__container}`}
      >
        <div className={classes.container__card__container__user}>
          <div className={classes.container__card__container__user__div}>
            <img src={image} alt='user' />
            <p>Report for</p>
            <h4>Jeremy Robson</h4>
          </div>
          <div className={classes.container__card__container__buttons}>
            <button
              id='daily'
              className={
                selectedDashboard === 'daily'
                  ? `${classes.container__card__container__buttons__active}`
                  : `${classes.container__card__container__buttons__btn}`
              }
              onClick={handleDaily}
            >
              Daily
            </button>
            <button
              id='weekly'
              className={
                selectedDashboard === 'weekly'
                  ? `${classes.container__card__container__buttons__active}`
                  : `${classes.container__card__container__buttons__btn}`
              }
              onClick={handleWeekly}
            >
              Weekly
            </button>
            <button
              id='monthly'
              className={
                selectedDashboard === 'monthly'
                  ? `${classes.container__card__container__buttons__active}`
                  : `${classes.container__card__container__buttons__btn}`
              }
              onClick={handleMonthly}
            >
              Monthly
            </button>
          </div>
        </div>
        {selectedDashboard === 'weekly' && <Weekly info={info} weekly={weekly} />}
        {selectedDashboard === 'daily' && <Daily info={info} daily={daily} />}
        {selectedDashboard === 'monthly' && <Monthly info={info} monthly={monthly} />}
      </div>
    </div>
  );
};

export default App;
