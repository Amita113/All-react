import React, { useState, useMemo, useEffect,useCallback } from 'react';

export default function Call() {

    /*memoize the function useCallback vs memoize the value useMemo
    Referential equality for functions
    */
    const [counter, setCounter] = useState(1);

    const result = useMemo(() => {
        return factorial(counter)
    }, [counter]);
    const [name, setName] = useState("");
    // create a function and use it with component 
    // const displayName =()=>{return name}


    const displayName =useCallback(()=>{
        return name
    },[name])

    return (
        <div className='App'>
            <h1>Factorial of {counter} is <span>{result}</span> </h1>
        <div>
        <button onClick={()=>setCounter(counter-1)}> Decreament</button>
        <button onClick={()=>setCounter(counter+1)}> Increament</button>

        </div>

        <hr/>
        <hr/>

        <div>
            <label> Enter Name</label>
        </div>

        <br/>
        <input 
         type='text'
         placeholder='enter name'
         value={name}
         onChange={(e)=> setName(e.target.value)}
        />
        <br/>
        <br/>
        {/* in this component instead of passing name variable we need to pass a function.
        */}
        <DisplayName displayName={displayName}/>

        </div>

    )
}


const DisplayName = (({displayName})=>{
    // console.log("rendered")
    //here useEffect
    const[value,setValue] = useState("")
    useEffect(()=>{
        setValue(displayName())
        console.log("Name component rendered")
    },[displayName])
    return <p> {`My name is ${value}`}</p>
})
// const DisplayName = React.memo(({name})=>{
//     console.log("rendered")
//     return <p> {`My name is ${name}`}</p>
// }) //referential equality

const factorial = (n)=>{
    if(n<-1){return -1}
    if(n===0){ return 1}
    return n * factorial(n-1)
}