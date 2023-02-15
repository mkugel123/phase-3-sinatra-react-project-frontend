import React from "react";

function OpenCloseTab({ isOccupied, onOpenCloseTab, tableId }) {

  function handleClick() {
    fetch(`http://localhost:9292/tables/${tableId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       occupied: !isOccupied
      }),
    })
      .then((r) => r.json())
      .then((updatedTable) => onOpenCloseTab(updatedTable));
  }

  return(
    <button onClick={handleClick}>{isOccupied ? "Close Tab" : "Open Tab"}</button>
  )
}

export default OpenCloseTab