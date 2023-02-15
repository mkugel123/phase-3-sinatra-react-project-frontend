import React from "react";
import OpenCloseTab from "./OpenCloseTab";

function Table({ tableId, isOccupied, onOpenCloseTab }) {
  return (
    <div style={{backgroundColor: "lightblue", width: "500px", height: "500px"}}>
      <h1>{tableId}</h1>
      <OpenCloseTab 
        isOccupied={isOccupied}
        onOpenCloseTab={onOpenCloseTab}
        tableId={tableId}
      />
    </div>
  )
}

export default Table