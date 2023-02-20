import React, { useEffect, useState } from "react";
import Table from "./Table";

function TableMap({ waiters }) {

  const [tables, setTables] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/tables")
    .then((r) => r.json())
    .then((data) => setTables(data))
  }, []);

  function handleOpenCloseTab(updatedTable) {
      const updatedTables = tables.map((table) => {
        if (table.id === updatedTable.id) {
          return updatedTable;
        } else {
          return table;
        }
      });
      setTables(updatedTables);
  }

  const tableGrid = tables.map((table) => {
    return (
      <Table
        key={table.id}
        tableId = {table.id}
        isOccupied = {table.occupied}
        onOpenCloseTab = {handleOpenCloseTab}
        waiters={waiters}
      />
    )  
  })


  return (
    <div>
      {tableGrid}
    </div>
  )
}

export default TableMap