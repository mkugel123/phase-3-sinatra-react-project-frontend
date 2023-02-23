import React, { useState } from "react";

function ServiceForm({ waiters, tableId, onServiceFormSubmit }) {

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
    .then((newService) => onServiceFormSubmit(newService))
    .then(alert("Submitted"))
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="waiterId" onChange={handleChange} value={formData.waiterId}>
        <option hidden>Please Select Waiter</option>
        {waiterOptions}
      </select>
      <label>Total:</label>
      <input type="text" name="tabTotal" value={formData.tabTotal} onChange={handleChange}/>
      <label>Tip:</label>
      <select name="tip" value={formData.tip} onChange={handleChange}>
        <option hidden>Tip Amount</option>
        <option value={.15}>15%</option>
        <option value={.18}>18%</option>
        <option value={.2}>20%</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ServiceForm