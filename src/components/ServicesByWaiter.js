import React, { useState } from "react";
import Service from "./Service";

function ServicesByWaiter({ waiters, onEditServiceFormSubmit, onDeleteService }) {

  const [services, setServices] = useState([])

  const waiterOptions = waiters.map((waiter) => {
    return <option key={waiter.id} value={waiter.id}>{waiter.name}</option>
  })

  function handleEditServiceFormSubmit(updatedService) {
    const updatedServices = services.map((service) => {
      if (service.id === updatedService.id) {
        return updatedService;
      } else {
        return service;
      }
    });
    setServices(updatedServices)
    onEditServiceFormSubmit(updatedService);
  }

  function handleDeleteService(deletedService){
    const updatedServices = services.filter((service) => service.id !== deletedService.id);
    
    setServices(updatedServices)
    onDeleteService(deletedService)
  }

  const waiterServices = services.map((service) => {
    return (
      <Service 
        key={service.id} 
        service={service}
        onEditServiceFormSubmit={handleEditServiceFormSubmit}
        color = "lightpink"
        onDeleteService={handleDeleteService}
      />
    )
  })

  function handleChange(e) {
    fetch(`http://localhost:9292/waiters/${e.target.value}`)
    .then((r) => r.json())
    .then((data) => setServices(data.services))
  }

  return (
    <div style={{margin: "10px"}}>
      <select onChange={handleChange}>
        <option hidden>Please Select Waiter</option>
        {waiterOptions}
      </select>
      <span>{waiterServices}</span>
    </div>
    

  )
}

export default ServicesByWaiter