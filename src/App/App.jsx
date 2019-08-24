import React from 'react';
import './App.css';

const App = ({ counter, add, subtract }) => {
  return (
    <div className="App">
      <button onClick={() => add(1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => subtract(1)}>-</button>
    </div>
  );
};

export default App;
