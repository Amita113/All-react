import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        //use SetCount to update count after first render and time
        setCount((count)=>count+1)
    },1000);
  },[]);
  // add the square brackets to re-rendering
  return <h1>I have rendered {count} times!</h1>;
}
