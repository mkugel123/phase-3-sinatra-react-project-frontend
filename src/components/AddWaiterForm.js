import React, {useState} from "react";

function AddWaiterForm({ onAddWaiterSubmit }){

  const [formData, setFormData] = useState({
    name: ""
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/waiters", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((newWaiter) => onAddWaiterSubmit(newWaiter))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} value={formData.name}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddWaiterForm