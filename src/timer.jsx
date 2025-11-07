import React, { useState, useEffect } from "react";
import "./timer.css";
import Progressbar from "./circularProgressBar";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [totalSecondsLeft, setTotalSecondsLeft] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimeLeft((prev) => {
      const newTime = { ...prev, [name]: Number(value) };
      const total =
        newTime.hours * 3600 + newTime.minutes * 60 + newTime.seconds;
      setTotalSeconds(total);
      setTotalSecondsLeft(total);
      return newTime;
    });
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTotalSecondsLeft((prev) => {
          if (prev < 1) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
          const total = prev - 1;
          setTimeLeft({
            hours: Math.floor(total / 3600),
            minutes: Math.floor((total % 3600) / 60),
            seconds: Math.floor(total % 60),
          });
          return total;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
    setTotalSeconds(0);
    setTotalSecondsLeft(0);
  };

  let hrs = String(timeLeft.hours).padStart(2, "0");
  let mins = String(timeLeft.minutes).padStart(2, "0");
  let secs = String(timeLeft.seconds).padStart(2, "0");

  return (
    <div className="timer">
      <Progressbar
        hours={hrs}
        minutes={mins}
        seconds={secs}
        totalSeconds={totalSeconds}
        totalSecondsLeft={totalSecondsLeft}
        isRunning={isRunning}
      />
      <div className="set-timer-form">
        <div className="set-timer-inputs">
          <div className="timer-input">
            <label>Hours</label>
            <input
              type="number"
              min="0"
              name="hours"
              value={timeLeft.hours}
              onChange={handleChange}
            />
          </div>
          <div className="timer-input">
            <label>Minutes</label>
            <input
              type="number"
              min="0"
              max="59"
              name="minutes"
              value={timeLeft.minutes}
              onChange={handleChange}
            />
          </div>
          <div className="timer-input">
            <label>Seconds</label>
            <input
              type="number"
              min="0"
              max="59"
              name="seconds"
              value={timeLeft.seconds}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="button-section">
          <button
            className="start-timer-btn"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
          <button className="reset-timer-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
