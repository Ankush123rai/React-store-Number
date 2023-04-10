import { useState } from "react";
import "./App.css";

export default function App() {
  const [randomNumbers, setRandomNumbers] = useState([1, 2, 4, 6]);

  const addOnMoreNumber = () => {
    setRandomNumbers([Math.round(Math.random() * 100), ...randomNumbers]);
  };

  const removeFirst = () => {
    randomNumbers.shift();
    setRandomNumbers([...randomNumbers]);
  };
  const removeLast = () => {
    randomNumbers.pop();
    setRandomNumbers([...randomNumbers]);
  };

  return (
    <div>
      <button onClick={addOnMoreNumber}>Add One More</button>
      <hr />
      <button onClick={removeFirst}>Remove First</button>
      <button onClick={removeLast}>Remove Last</button>
      <ul>
        {randomNumbers.map((number) => (
          <li className="list">{number}</li>
        ))}
      </ul>
    </div>
  );
}