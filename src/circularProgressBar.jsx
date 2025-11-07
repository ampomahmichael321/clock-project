import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progressbar = ({
  hours,
  minutes,
  seconds,
  totalSeconds,
  totalSecondsLeft,
  isRunning,
}) => {
  let percentage = isRunning && (totalSecondsLeft / totalSeconds) * 100;

  console.log("percentage:" + percentage);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        position: "relative",
      }}
    >
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: "#1cdc66ff",
          trailColor: "#eee",
        })}
      />
      <h1
        style={{
          position: "absolute",
        }}
      >
        {hours} : {minutes} : {seconds}
      </h1>
    </div>
  );
};

export default Progressbar;
