import React, { useState, useEffect } from "react";
import AddWaiterButton from "./AddWaiterButton";

function Home() {

  const [waiters, setWaiters] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/waiters/names")
    .then((r) => r.json())
    .then((data) => setWaiters(data))
  }, []);

  return (
    <div>
      <AddWaiterButton/>
    </div>
  )
}

export default Home;