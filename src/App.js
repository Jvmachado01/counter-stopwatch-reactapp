import UseCounter from "./hooks/UseCounter";
import UseStopwatch from "./hooks/UseStopwatch"; 

function App() {
  const { count, increment, decrement, resetCount } = UseCounter();
  const { time, start, stop, reset } = UseStopwatch();

  return (

    <div className="container my-5">

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h1>Counter</h1>
              <div className="my-5">
                <h2 className="my-5">{count}</h2>
                <button className="btn btn-success mx-3" onClick={increment}>Increment</button>
                <button className="btn btn-danger mx-3" onClick={decrement}>Decrement</button>
                <button className="btn btn-outline-secondary mx-3" onClick={resetCount}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card text-center">
            <div className="card-body">
              <h1>Stopwatch</h1>
              <div className="my-5">
                <h2>{time}</h2>
                <button className="btn btn-success mx-3" onClick={start}>Start</button>
                <button className="btn btn-warning mx-3" onClick={stop}>Pause</button>
                <button className="btn btn-danger mx-3" onClick={reset}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
