import { useShallow } from "zustand/react/shallow";
import { useAppStore } from "../store/appStore";

export default function Counter() {
  const { count, increment, decrement, reset } = useAppStore(
    useShallow((state) => {
      return {
        count: state.count,
        increment: state.increment,
        decrement: state.decrement,
        reset: state.reset,
      };
    })
  );

  console.log("Re Render Counter");
  return (
    <>
      <h1>Count : {count}</h1>
      <div className="button-wrapper">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}
