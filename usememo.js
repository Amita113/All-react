// what is useMemo, why do we use it
/*useMemo memoization in JS  When we need Application performance*/

//How to use useMemo


// function add(a,b){
//     return a+b;
// }
// add(5,5)

/*we have a function add(5,5) you as a user are calling the same function with same parameters, in this case memozation, it saves the calculation in memory and save it, 

And once we call the function action it gets the result from the cache and renders it 
*/
import React, { useMemo } from 'react';
import './App.css';
import { useState } from 'react';

export default function Memoone() {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100)


    // one more function
    // function multiply(){
    //console.log("Its rendering because of add button and minus as well")
    //     return add*10;
    // }

    const multiplication = useMemo(function multiply() {
        console.log("Its rendering because of add button")
           return add * 10;
       }, [add])
    return (

        <div className='App'>
            <h1>Learning useMemo hook </h1>
            <p> In our React app we have different functions in a file so some function get called unnecesarlily, application becomes slow
                so we have useMemo to stop calling those functions. lets take ex
            </p>
            {/* lets call the function here */}
            {multiplication}
            <br />
            <button onClick={() => { setAdd(add + 1) }}> Add </button>
            <span>{add}</span>
            <button onClick={() => { setMinus(minus - 1) }}> Minus</button>
            <span>{minus}</span>

        </div>
    )
}