import { useState } from "react";

import React from 'react'


export default function Reactform() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [myCar, setMyCar] = useState("")


  const handleChangeSelect = (event) => {
    // event.preventDefault() we will not add 
    setMyCar(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)

  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (email.length === 0) {
      alert("email id cannot be empty")
      return
    }
    if (password.length < 8) {
      alert("password cannot be less than 8 characters")
      return
    }
    alert(`You Sucessfully Registered  ${name}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
        <label>Enter email-id</label>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
        />
        <label>Enter password</label>
        <input
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <select value={myCar} onChange={handleChangeSelect}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  )
}
