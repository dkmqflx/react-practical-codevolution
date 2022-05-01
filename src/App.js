import './App.css';
import CountUp, { useCountUp } from 'react-countup';
import { useRef } from 'react';

function App() {
  const countUpRef = useRef();
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 5,
    end: 10000,
    startOnMount: false,
  });
  return (
    <div className="App">
      <dir>
        <div ref={countUpRef}></div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>reset</button>
        <button onClick={pauseResume}>pause / resume</button>
        <button onClick={() => update(2000)}>update to 2000</button>
      </dir>

      <h1>
        <CountUp end={200} />
      </h1>
      <br />
      <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUp start={500} end={1000} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUp end={1000} duration={5} prefix="$" decimals={2} />
      </h1>
      <h1>
        <CountUp end={1000} duration={5} suffix="USD" decimals={2} />
      </h1>
    </div>
  );
}

export default App;
