import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div style={styles.container}>
      <h1>⏱ Stopwatch</h1>
      <h2 style={styles.time}>{formatTime(time)}</h2>
      <div>
        <button onClick={handleStartStop} style={styles.button}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  time: {
    fontSize: "48px",
    margin: "20px 0",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default App;
