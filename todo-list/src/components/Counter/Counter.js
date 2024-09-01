import { useDispatch, useSelector } from "react-redux";
import incrementIcon from "../../assets/img/add.svg";
import decrementIcon from "../../assets/img/remove.svg";
import "./style.css";
import {
  decrement,
  decrementByAmout,
  increment,
  incrementByAmout,
} from "../../features/counter/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="box-counter">
      <button onClick={() => dispatch(incrementByAmout(2))}>
        <p>2</p> <img src={incrementIcon} />
      </button>
      <button onClick={() => dispatch(increment())}>
        <img src={incrementIcon} />
      </button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>
        <img src={decrementIcon} />
      </button>
      <button onClick={() => dispatch(decrementByAmout(2))}>
        <p>2</p> <img src={decrementIcon} />
      </button>
    </div>
  );
};
