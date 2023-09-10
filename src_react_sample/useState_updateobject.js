import { useState } from "react";


export default function Newstate() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue",brand:"BMW",model:"supercar",year:"2023" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >click here to update to new state</button>
    </>
  )
}


              
