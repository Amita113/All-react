import { useState } from "react";

function Form1(){
const [firstName, setFirstName] = useState('') // useState to store First Name
// const [lastName, setLastName] = useState('') // useState to store Last Name
 const handleSubmit=()=>{
    if(firstName.length<5){
        alert("This text box accepts mini 5 charactyers")
        return
    }
 }

 const handleChange=(event)=>{
    setFirstName(event.target.value)
 }
 
return(
    <form >
        <input type="text" value={firstName} onChange={handleChange}/>
        <button onClick={handleSubmit}> Submit form </button>
    </form>
)
}

export default Form1