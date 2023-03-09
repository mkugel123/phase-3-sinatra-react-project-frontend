import React, { useState } from "react";

function Service({ service, onEditServiceFormSubmit, onDeleteService, color }) {

  const [isClicked, setIsClicked] = useState(false)
  const [formData, setFormData] = useState({
    tip: service.tip,
    tabTotal: service.tab_total
  })

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  } 

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:9292/services/${service.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((updatedService) => onEditServiceFormSubmit(updatedService))
      .then(setIsClicked(false))
  }

  function handleDeleteClick() {
    fetch(`http://localhost:9292/services/${service.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedService) => onDeleteService(deletedService));
  }

  const editForm = (
    <form onSubmit={handleSubmit}>
      <label>Tab:</label>
      <input name="tabTotal" type="text" value={formData.tabTotal} onChange={handleChange}/>
      <label>Tip:</label>
      <input name="tip" type="text" value={formData.tip} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  )


  return (
    <div style={{backgroundColor: `${color}`, width: "fit-content", height: "fit-content", padding: "5px", margin: "5px"}}>
      <span>Tab: ${service.tab_total}</span>
      <br/>
      <span>Tip: ${service.tip}</span>
      <br/>
      <span>Total: ${service.tab_total + service.tip}</span>
      <br/>
      <button onClick={() => setIsClicked(!isClicked)}>{isClicked ? 'Close' : 'Edit'}</button>
      {isClicked ? editForm : null}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default Service