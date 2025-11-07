import React, { useState, useEffect } from "react";
import Clock from "./clock.jsx";
import Footer from "./footer.jsx";
import "./App.css";

export default function App() {
  const [type, setType] = useState("clock");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="main">
      <Clock type={type} isLoading={isLoading} />
      <h2 className="loader">{isLoading && "Loading......"}</h2>
      <Footer
        type={type}
        setType={setType}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}
