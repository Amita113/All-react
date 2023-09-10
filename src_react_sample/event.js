import React from 'react'

function shoot(){
    // console.log("I clicked a button");
    alert("I clicked a button");
}

export default function Event() {
  return (
    <div>
      <button onClick={shoot}> click me once </button>
    </div>
  )
}
