import React from "react";

function Table({ tableId }) {
  return (
    <div style={{backgroundColor: "lightblue", width: "500px", height: "500px"}}>
      <h1>{tableId}</h1>
    </div>
  )
}

export default Table