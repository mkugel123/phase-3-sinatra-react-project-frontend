import React, { useState, useEffect } from "react";
import Service from "./Service";

function Services({services, onEditServiceFormSubmit, onDeleteService}) {

  const serviceGrid = services.map((service) => {
    return (
      <Service
        key={service.id}
        service={service}
        color = "lightgreen"
        onEditServiceFormSubmit={onEditServiceFormSubmit}
        onDeleteService={onDeleteService}
      />
    )
  })

  return (
    <div>
      <h1>Services:</h1>
      {serviceGrid}
    </div>
  )

}

export default Services