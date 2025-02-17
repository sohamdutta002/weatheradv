import React, { useState, useEffect } from 'react';
import Triday from './Triday';

const Home = ({ city, tridayData, image }) => {
  const [timeDisplay, setTimeDisplay] = useState('');
  let dateDisplay = '';

  if (city && city.location) {
    const date = city.location.localtime.split(' ')[0];
    const [y, m, d] = date.split('-');
    dateDisplay = `${d}/${m}/${y.substring(2)}`;
  }

  useEffect(() => {
    const updateTime = () => {
      const now = new Date(window.Date.now());
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setTimeDisplay(`${hours}:${minutes.toString().padStart(2, '0')} ${period}`);
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);

  }, [timeDisplay]);

  return (
    <div className="locationCards">
      <div className="card new">
        <div className="leftcard">
          <div className="leftcardinner">
            <img src={city.current.condition.icon} alt="Weather Condition" />
            {city.current.temp_c}&deg;C
          </div>
          <div className="condition">{city.current.condition.text}</div>
          <div className="date">{dateDisplay}</div>
          <div className="time">{timeDisplay}</div>
        </div>
      </div>
      <div
        className="card activee"
        style={{ background: `url(${image}) center / cover no-repeat` }}
      ></div>
      <Triday tridayData={tridayData} />
    </div>
  );
};

export default Home;
