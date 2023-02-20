import React, { useState } from "react";

function TabForm({ waiters, tableId }) {

  // const [foods, setFoods] = useState([])

  const [formData, setFormData] = useState({
    waiterId: 0,
    tableId: tableId,
    tip: 0,
    tabTotal: 0
  })

  const waiterOptions = waiters.map((waiter) => {
    return <option key={waiter.id} value={waiter.id}>{waiter.name}</option>
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/services", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then((service) => console.log(service))
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="waiterId" onChange={handleChange} value={formData.waiterId}>
        <option>Please Select Waiter</option>
        {waiterOptions}
      </select>
      <label>Total:</label>
      <input type="number" name="tabTotal" value={formData.tabTotal} onChange={handleChange}/>
      <label>Tip:</label>
      <select name="tip" value={formData.tip} onChange={handleChange}>
        <option value={.15}>15%</option>
        <option value={.18}>18%</option>
        <option value={.2}>20%</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default TabForm