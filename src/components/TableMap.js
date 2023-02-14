import React, { useEffect, useState } from "react";
import Table from "./Table";

function TableMap() {

  const [tables, setTables] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/tables")
    .then((r) => r.json())
    .then((data) => setTables(data))
  }, []);

  const tableGrid = tables.map((table) => {
    return (
      <Table
      key={table.id}
      tableId = {table.id}
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