import React from "react";
import OpenCloseTab from "./OpenCloseTab";
import TabForm from "./TabForm";

function Table({ tableId, isOccupied, onOpenCloseTab, waiters }) {

  return (
    <div style={{backgroundColor: isOccupied ? "red" : "lightblue", width: "500px", height: "500px"}}>
      <h1>{tableId}</h1>
      {isOccupied ? <TabForm waiters={waiters} tableId={tableId}/> : null}
      <OpenCloseTab
        isOccupied={isOccupied}
        onOpenCloseTab={onOpenCloseTab}
        tableId={tableId}
      />
    </div>
  )
}

export default Table