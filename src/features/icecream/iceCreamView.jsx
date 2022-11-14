import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams} </h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(event) => setValue(parseInt(event.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice creams
      </button>
    </div>
  );
};
