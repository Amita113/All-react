import React from 'react'
import { useEffect } from 'react';
// const myFunction=()=>{
// document.getElementById('first').innerHTML="Its very cool whether today"
// }

function Event_Effect_hook() {
//   useEffect(() => {
//     // console.log("executed after render phase");
// document.getElementById('first').style.color="deeppink"

//   },[]);

  useEffect(() => {
    setTimeout(() => {
document.getElementById('first').style.color="deeppink"
      
    }, 3000);
  });

  return (
    <div>
       <h1 id='first' style={{color:"red"}}> Hello all  </h1>
      {/* <button onClick={myFunction}> Effect button </button> */}
    </div>
  )
}

export default Event_Effect_hook
