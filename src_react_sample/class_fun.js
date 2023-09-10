// import React from "react"
import { useState } from "react"
// class Counter extends React.Component{
//     constructor(props)
//     {
//     super(props)
//     this.state={
//         counter:0
//     }
//     }

//     render(){
//         return(
//             <>
//             <h1>You clicked {this.state.counter} times</h1>
//            <button onClick={()=>this.setState({counter:this.state.counter+1})}>  click me </button>
//            </>
//         )
//     }
// }

function Counter(){
    const [counter,setCounter] = useState(0)
    function handleCLick(){
    setCounter(counter+1)
    }
    return(
        <>
        <h1> you clicked {counter} times</h1>
        <button onClick={handleCLick}> click to update </button>
        </>
    )
}

export default Counter