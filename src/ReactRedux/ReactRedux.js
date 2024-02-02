import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {incNumber,decNumber,tenNumber} from "../actions/index"
function ReactRedux() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-2xl text-white text-center">
          Welcome to ReactRedux
        </h1>
        <div className="felx justify-center  w-full items-center text-pink-950 font-bold text-2xl">
          <a title="Decrement" onClick={()=>dispatch(decNumber(5))}>
            <span>- </span>
          </a>
          <input name="quantity" type="text" value={myState} />
          <a title="Increment" onClick={()=>dispatch(incNumber(5))}>
            <span> +</span>
          </a>
          <a title="Increment" onClick={()=>dispatch(tenNumber(10))}>
            <span> +</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ReactRedux;
