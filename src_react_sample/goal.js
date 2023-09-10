import React from 'react'

function Scored(){
    return(
        <h1> Team scored a point</h1>
    )
}
function Noscore(){
    return(
        <h1> Team has lost point </h1>
    )
}
//conditional render
export default function Goal(props) {
    const isGoal1=props.isGoal;
    
        if(isGoal1) {
      return  <Scored/>
        }
       return <Noscore/>
}
