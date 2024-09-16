import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const resetCount = () => setCount(0);

  return {
    count,
    increment,
    decrement,
    resetCount,
  };
};

export default useCounter;
