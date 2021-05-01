import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center', fontFamily: 'Black Ops One', marginBottom: "30px"}}>
      <div style={{fontSize: '100px'}}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button className="btn btn-primary" onClick={start}>Start</button>
      <button className="btn btn-primary" onClick={pause}>Pause</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}