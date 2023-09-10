import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// a javascript variable
const car="Ford";
// object in javascript
const student={
  name:"Ganesha",
  address:"Pune"
}
// created a simple component
function Car(props){
  return(
    <>
    {car}
    <h1> This is a {props.color} car</h1>
    <h2>Iam {student.name} ,Iam from{student.address} </h2>
    </>
  )
 
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Car color="red" />
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
