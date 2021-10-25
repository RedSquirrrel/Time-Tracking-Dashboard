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
  const [selectedDashboard, setSelectedDashboard] = useState('WEEKLY');

  useEffect(() => {
    setInfo(jsonData.data);
  }, [info]);

  const handleDaily = e => {
    setSelectedDashboard('DAILY');
    setDaily(e.target.value);
  };
  const handleMonthly = e => {
    setSelectedDashboard('MONTHLY');
    setMothly(e.target.value);
  };
  const handleWeekly = e => {
    setSelectedDashboard('WEEKLY');
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
              className={classes.container__card__container__buttons__btn}
              onClick={handleDaily}
            >
              Daily
            </button>
            <button
              style={{ color: 'white' }}
              className={classes.container__card__container__buttons__btn}
              onClick={handleWeekly}
            >
              Weekly
            </button>
            <button
              className={classes.container__card__container__buttons__btn}
              onClick={handleMonthly}
            >
              Monthly
            </button>
          </div>
        </div>
        {selectedDashboard === 'WEEKLY' && <Weekly info={info} weekly={weekly} />}
        {selectedDashboard === 'DAILY' && <Daily info={info} daily={daily} />}
        {selectedDashboard === 'MONTHLY' && <Monthly info={info} monthly={monthly} />}
      </div>
    </div>
  );
};

export default App;
