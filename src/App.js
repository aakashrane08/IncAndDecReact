import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decHandler() {
    setCount(count - 1);
  }
  function incHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-700 flex-col gap-4">
      <div className="font-medium text-blue-400 text-2xl">
        Increment && Decrement
      </div>

      <div className="flex gap-10 bg-white px-3 py-2 rounded text-[25px] text-gray-700 justify-center">
        <button
          onClick={decHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button
          onClick={incHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      
      <button onClick={resetHandler} className="text-white bg-blue-500 py-2 px-5 rounded text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
