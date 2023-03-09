import React, { useState, useEffect } from "react";
import TableMap from "./TableMap";
import Services from "./Services";
import ServicesByWaiter from "./ServicesByWaiter";
import AddWaiterForm from "./AddWaiterForm";

function App() {
  const [waiters, setWaiters] = useState([])
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/services")
    .then((r) => r.json())
    .then((data) => setServices(data))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/waiters")
    .then((r) => r.json())
    .then((data) => setWaiters(data))
  }, []);

  function handleAddWaiterSubmit(newWaiter){
    setWaiters([...waiters, newWaiter])
  }

  function handleServiceFormSubmit(newService){
    setServices([...services, newService])
  }

  function handleEditServiceFormSubmit(updatedService) {
    const updatedServices = services.map((service) => {
      if (service.id === updatedService.id) {
        return updatedService;
      } else {
        return service;
      }
    });
    setServices(updatedServices);
  }

  function handleDeleteService(deletedService){
    const updatedServices = services.filter((service) => service.id !== deletedService.id);
    setServices(updatedServices)
  }

  return (
    <div>
       <AddWaiterForm
        onAddWaiterSubmit={handleAddWaiterSubmit}
      />
      <TableMap
        waiters={waiters}
        onServiceFormSubmit={handleServiceFormSubmit}
      />
      <Services
        services={services}
        onEditServiceFormSubmit={handleEditServiceFormSubmit}
        onDeleteService={handleDeleteService}
      />
      <ServicesByWaiter
        waiters={waiters}
        onEditServiceFormSubmit={handleEditServiceFormSubmit}
        onDeleteService={handleDeleteService}
      />  
    </div>
  )
}

export default App;
