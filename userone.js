import React, { useReducer } from "react";
import './App.css'
//useReducer Hook
/* 
its a hook to manage state, alternative
simple state management, complex logic, it optimizes
const[state,dispatch] = useReducer(reducer,initialState)
*/
const initialstate = 0;

//reducer accepts current state and action can be of different types then we use switch statement
const reducer = (state, action) => {
    switch (action) {
        case "Increament":
            return state + 1
        case "Decreament":
            return state - 1
        default:
            return state
    }
}
// how is reducer called----dispatch
function UseToReduce() {
    //first use the reducer , then create initialstate and reducer
    const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <>
            <div>{" count: "}{count}</div>
            <div>
                <button onClick={()=>dispatch("Increament")}> Increament</button>
                <button onClick={()=>dispatch("Decreament")}> Decreament</button>
            </div>
        </>
    )
}
export default UseToReduce;
