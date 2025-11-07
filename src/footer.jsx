import { useEffect } from "react";
export default function Footer({ type, setType, isLoading, setIsLoading }) {
  function activateLoader() {
    setIsLoading(true); //set Loading to true
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); //Set Loading back to false after one second
  }
  return (
    <div className="footer">
      <p
        style={{ borderBottom: type == "clock" && "solid white 2px" }} //If its in the clock mode underline
        onClick={() => {
          activateLoader();
          setTimeout(() => setType("clock"), 1000); //Wait for 1 second before changing the type
        }}
      >
        Clock
      </p>
      <p
        style={{ borderBottom: type == "timer" && "solid white 2px" }} //If its in the timer mode underline
        onClick={() => {
          activateLoader();
          setTimeout(() => setType("timer"), 1000); //Wait for 1 second before changing the type so that the loader will show
        }}
      >
        Timer
      </p>
    </div>
  );
}
