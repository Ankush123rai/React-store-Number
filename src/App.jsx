import { useState } from "react";
import "./App.css";

export default function App() {
  const [randomNumbers, setRandomNumbers] = useState([1, 2, 4, 6]);

  const addOnMoreNumber = () => {
    setRandomNumbers([Math.round(Math.random() * 100), ...randomNumbers]);
  };


  return (
    <div>
      <button onClick={addOnMoreNumber}>Add One More</button>
      <hr />
      
      <table border="1px">
        {randomNumbers.map((number) => (
          <tr className="list">{number}</tr>
        ))}
      </table>
    </div>
  );
}