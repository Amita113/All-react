import { useState, useEffect, useRef } from "react";


function Usereftwo() {
  const [inputValue, setInputValue] = useState("");
  const count= useRef(0);

  useEffect(() => {
   count.current=count.current+1
  //  console.log(count.current)
  });
// react itself will this is controlled component of form
//so we use ref as an attribute to an elelment when it is controlled by DOM
  return (
    <>
      <input 
     
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
export default Usereftwo;