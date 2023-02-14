import React, { useState, useEffect } from "react";
import AddWaiterButton from "./AddWaiterButton";

function Home() {

  const [waitersNames, setWaitersNames] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/waiters/names")
    .then((r) => r.json())
    .then((data) => setWaitersNames(data))
    debugger
  }, []);

  function handleAddWaiterSubmit(name){
    setWaitersNames([...waitersNames, name])
  }

  return (
    <div>
      <AddWaiterButton
        onAddWaiterSubmit={handleAddWaiterSubmit}
      />
    </div>
  )
}

export default Home;