import React, { useState } from 'react';

function Main() {
  const [counter, setCounter] = useState(0);

  const handleCounter = (number) => {
    setCounter(counter + number);
  };

  return (
    <div>
      <button onClick={() => handleCounter(1)}>+</button>
      <button onClick={() => handleCounter(-1)}>-</button>
      <MainNum counter={counter} />
    </div>
  );
}

export default Main;
