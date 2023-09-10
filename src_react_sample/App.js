import logo from './logo.svg';
import './App.css';
import Bus from './bus';
import Event from './event';
import Goal from './goal';
import List from './list';
import Reactform from './reactform';
import Clock from './clock'
import Counter from './class_fun';
import Form1 from './form1';
import Newstate from './useState_updateobject';
import Car from './car';
// import Formvalid from './form_valid';

import Timer from './useEffect_sample';
import HookCounterOne from './useEffect_tittle_update';
import FetchEmployees from './useeffect_emp_fetch'

import Greet from './useeffect_name';
import Component1 from './usecontext';
// import Component1 from './useContext1';
import Component11 from './useContext1';
import { useEffect } from 'react';
// import Userefone from './useref';
import Usereftwo from './useref_count'

import Selectform from './form_group'
function App() {
// document other element change and useEffect happens
  useEffect(() => {
    const element = document.getElementById('box');
    console.log(element);
    console.log(element.id);
  }, []);
  return (
  
    <div className="App">
      <h2 id="box">its bobbyhas.com</h2>
      <Bus/>
      <Event/>
      <Goal isGoal={false}/>
      <List/>
      <Reactform/>
      <Clock/>
      {/* <Formvalid/> */}
      <Counter/>
      <Form1/>
      <Newstate/>
      <Car color="Blue"/>
      <Timer/>
      <HookCounterOne/>
      {/* <FetchEmployees/> */}
      <Greet name="its changed" />  
      <Component1/>
      <Component11/>
      {/* <Userefone/> */}
      <Usereftwo/>
      <Selectform/>
      {/* // First render */}
 {/* // Side-effect RUNS

// Second render, name prop changes
<Greet name="Stan" />   // Side-effect RUNS

// Third render, name prop doesn't change
<Greet name="Stan" />   // Side-effect DOES NOT RUN

// Fourth render, name prop changes
<Greet name="Butters"/> // Side-effect RUNS */}
      </div>
   
  );
}

export default App;
