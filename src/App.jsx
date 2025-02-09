import "./App.css";
import { useState } from "react";
import Counter from "../src/components/Counter";
import Exponent from "../src/components/Exponent";

const App = () => {
  const [count, setCount] = useState(0); 
  const superscript = [2, 3, 4, 5, 6];

  return (
    <div className="App">
      <h2><em> Counter </em></h2>
      {/* count and setCount as props */}
      <Counter count={count} setCount={setCount} />

      <br />
      <h2><em> Exponent </em></h2>
      <div className="container">
        {/* Generate Exponent components dynamically */}
        {superscript.map((num) => (
          <Exponent key={num} num={num} exponent={count} />
        ))}
      </div>
    </div>
  );
};

export default App;

