import React, { useState } from "react";

function Totals({ waiters }) {

  const [tips, setTips] = useState(0)

  const waiterOptions = waiters.map((waiter) => {
    return <option key={waiter.id} value={waiter.id}>{waiter.name}</option>
  })

  function handleChange(e) {
    fetch(`http://localhost:9292/waiters/${e.target.value}/tips`)
    .then((r) => r.json())
    .then((data) => setTips(data))
  }

  return (
    <div style={{margin: "10px"}}>
      <select onChange={handleChange}>
        <option hidden>Please Select Waiter</option>
        {waiterOptions}
      </select>
      <span>Tips: ${tips}</span>
    </div>
    

  )
}

export default Totals