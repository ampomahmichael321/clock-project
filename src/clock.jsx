import React, { useState, useEffect } from "react";
import Timer from "./timer.jsx";

export default function Clock({ type }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return type === "clock" ? (
    <div className="clock-container">
      <h1 className="time">{time.toLocaleTimeString()}</h1>
      <p className="date">
        <span className="date-text">Date:</span>
        {time.toDateString()}
      </p>
    </div>
  ) : (
    <Timer className="timer" />
  );
}
