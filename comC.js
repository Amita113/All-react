import React, { useContext } from 'react'
import { FirstName } from './App';
import { LastName } from './App';
// import { useContext } from 'react';


const ComC = () => {
    const fname1= useContext(FirstName);
        const lname1 = useContext(LastName)
return(
<>
<h1> Hi iam {fname1} {lname1}</h1>
</>
)}


export default ComC;