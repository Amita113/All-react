
import './App.css';
import React, { createContext } from 'react'
import ComA from './comA';
import Event_Effect_hook from'./event_Effect_hook'
import Call from './usecallback';
import Bindone from './binding';
import Bindtwo from './bindingtwo';
import List from './updating_Array_st';
import Memoone from './usememo';
import Purely from'./purecomp';
import UseToReduce from './userone'
import Component from './propst';
// lets create context as FirstName

const FirstName = createContext();
const LastName = createContext();
// now use parathesis  to return more than one element 

function App(){
  
const fname="Amita"
const lname="Aparajkar"
  return (
    <div className="App">
      {/* //simply we can use our created context as a custom component */}
      {/* where is the value */}
      <FirstName.Provider value={fname}>
        <LastName.Provider value={lname}>
        <ComA />
        </LastName.Provider>
      </FirstName.Provider>

      <Event_Effect_hook/>
      <Bindone/>
      <Bindtwo/>
      <List/>
      <Call/>
      <Memoone/>
      <Purely score="100" />
      <UseToReduce/>
      {/* <Component name=" mno " age={95}/> */}
      {/* here is a bug we are passing age as string 
      so lets use proptypes
      */}
      <Component name=" mno " age={95} />
    </div>
  );
}

export default App;
// every component can have only one default export
export { FirstName,LastName };
