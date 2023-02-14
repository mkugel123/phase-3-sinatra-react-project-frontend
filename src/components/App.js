import React, { useState, useEffect } from "react";
import AddWaiterForm from "./AddWaiterForm";
import TableMap from "./TableMap";
import Totals from "./Totals";

function App() {
  const [waiters, setWaiters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/waiters/names")
    .then((r) => r.json())
    .then((data) => setWaiters(data))
  }, []);

  function handleAddWaiterSubmit(name){
    setWaiters([...waiters, name])
  }

  return (
    <div>
      <AddWaiterForm
        onAddWaiterSubmit={handleAddWaiterSubmit}
      />
      <TableMap
        waiters={waiters}
      />
    </div>
  )
}

export default App;
