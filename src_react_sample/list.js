import React from 'react'

function Car(props){
    return (
       <h1> This is a {props.name} car </h1>
    )
}

export default function List() {
    const cars=[
        {id:1,name:"ford",color:"red"},
        {id:2,name:"Desire",color:"black"},
        {id:3,name:"ford",color:"red"},
        {id:4,name:"Desire",color:"black"},
        {id:5,name:"ford",color:"red"},
        {id:6,name:"Desire",color:"black"}
    ]
    // Es6 javascript arrow function notation we no need to use {} 
    // brackets when we written a component
  return (
      <ul>
        { cars.map((car)=> <Car name={car.name}/>)}
     </ul>
  )
}
