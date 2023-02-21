import React from "react";
import OpenCloseTab from "./OpenCloseTab";
import ServiceForm from "./ServiceForm";

function Table({ tableId, isOccupied, onOpenCloseTab, waiters, onServiceFormSubmit }) {

  return (
    <div style={{backgroundColor: isOccupied ? "red" : "lightblue", width: "500px", height: "150px"}}>
      <h2>{tableId}</h2>
      {isOccupied ? <ServiceForm waiters={waiters} tableId={tableId} onServiceFormSubmit={onServiceFormSubmit}/> : null}
      <OpenCloseTab
        isOccupied={isOccupied}
        onOpenCloseTab={onOpenCloseTab}
        tableId={tableId}
      />
    </div>
  )
}

export default Table