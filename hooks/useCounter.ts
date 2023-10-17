import { useState } from "react";

type CounterState = {
  count: Number;
};

type CounterFunction = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  increment: () => void;
  decrement: () => void;
};

export default function useCounter(
  value: number
): CounterState & CounterFunction {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, setCount, increment, decrement };
}
