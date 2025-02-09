const Counter = ({ count, setCount }) => {
  const decrement = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  const increment = () => setCount((prevCount) => prevCount + 1);
  

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
