import React, { useState, useEffect } from "react";
import AddWaiterForm from "./AddWaiterForm";
import TableMap from "./TableMap";
import Totals from "./Totals";

function App() {
  const [waiters, setWaiters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/waiters")
    .then((r) => r.json())
    .then((data) => setWaiters(data))
  }, []);

  function handleAddWaiterSubmit(newWaiter){
    setWaiters([...waiters, newWaiter])
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
